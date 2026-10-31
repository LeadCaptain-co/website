import { createClient } from "@base44/sdk";
import { NextResponse } from "next/server";
import { BUSINESS_TYPES, MONTHLY_LEADS } from "@/lib/content";

// Same pipeline as the original Harbor form, run server-side:
//   1. Lead.create            -> the Base44 `Lead` entity (required; failure = error to the visitor)
//   2. appendLeadToSheet      -> Google Sheets row         (best-effort)
//   3. forwardLeadWebhook     -> app.leadcaptain.co webhook (best-effort)
// All three live in the existing Base44 backend (see base44/ in the original repo), so nothing
// needs to be re-implemented here.

const APP_ID = process.env.BASE44_APP_ID ?? "6a835c885ca154bb27d0eb2b"; // public identifier
const SERVER_URL = process.env.BASE44_SERVER_URL ?? "https://base44.app";

type Lead = {
  full_name: string;
  phone: string;
  business_type: string;
  website: string;
  monthly_leads: string;
  marketing_consent: boolean;
  source: string;
};

function parse(body: unknown): Lead | null {
  if (typeof body !== "object" || body === null) return null;
  const b = body as Record<string, unknown>;
  const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

  const lead: Lead = {
    full_name: str(b.full_name, 120),
    phone: str(b.phone, 40),
    business_type: str(b.business_type, 120),
    website: str(b.website, 300),
    monthly_leads: str(b.monthly_leads, 60),
    marketing_consent: b.marketing_consent === true,
    source: str(b.source, 60) || "harbor_cta",
  };

  if (!lead.full_name || !/^[\d+\-()\s]{7,20}$/.test(lead.phone)) return null;
  if (!BUSINESS_TYPES.includes(lead.business_type)) return null;
  if (!MONTHLY_LEADS.includes(lead.monthly_leads)) return null;
  return lead;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const lead = parse(body);
  if (!lead) return NextResponse.json({ error: "invalid_lead" }, { status: 422 });

  const base44 = createClient({ appId: APP_ID, serverUrl: SERVER_URL, requiresAuth: false });

  try {
    await base44.entities.Lead.create(lead);
  } catch (err) {
    console.error("Lead.create failed", err);
    return NextResponse.json({ error: "save_failed" }, { status: 502 });
  }

  // The lead is saved; the follow-ups must never fail the visitor's submission.
  await Promise.allSettled([
    base44.functions.invoke("appendLeadToSheet", lead),
    base44.functions.invoke("forwardLeadWebhook", { name: lead.full_name, phone: lead.phone }),
  ]).then((results) =>
    results.forEach((r, i) => {
      if (r.status === "rejected") console.error(i === 0 ? "appendLeadToSheet failed" : "forwardLeadWebhook failed", r.reason);
    }),
  );

  return NextResponse.json({ ok: true });
}
