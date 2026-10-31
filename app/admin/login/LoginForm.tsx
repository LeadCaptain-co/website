"use client";

import { useActionState } from "react";
import { login } from "../actions";

const input = "mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-white outline-none focus:border-[#00D4FF]";

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);
  return (
    <form action={action} className="mt-8 space-y-4">
      <label className="block text-sm">
        אימייל
        <input name="email" type="email" required autoComplete="username" dir="ltr" className={input} />
      </label>
      <label className="block text-sm">
        סיסמה
        <input name="password" type="password" required autoComplete="current-password" dir="ltr" className={input} />
      </label>
      {state?.error && <p role="alert" className="text-sm text-red-400">{state.error}</p>}
      <button disabled={pending} className="w-full rounded-full bg-[#00D4FF] py-2.5 font-semibold text-[#0A192F] disabled:opacity-60">
        {pending ? "מתחבר…" : "כניסה"}
      </button>
    </form>
  );
}
