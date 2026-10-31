import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { tokenClient } from "./blog";

// Admin sign-in is the site's Base44 account login; only users whose Base44 role is `admin` get in.
// The Base44 access token is kept in an httpOnly cookie and re-verified on every admin request.

export const ADMIN_COOKIE = "lc_admin_token";

export async function getAdminSession() {
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!token) return null;
  try {
    const client = tokenClient(token);
    const user = await client.auth.me();
    if (user?.role !== "admin") return null;
    return { client, user };
  } catch {
    return null;
  }
}

export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  return session;
}
