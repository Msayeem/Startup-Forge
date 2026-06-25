"use client";

import { authClient } from "@/lib/auth-client";


export default function BlockedGuard({ children }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  if (user?.status === "block") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121212]">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 max-w-md w-full text-center">
          <div className="text-5xl mb-4">🚫</div>
          <h1 className="text-xl font-semibold text-zinc-100 mb-2">Account Blocked</h1>
          <p className="text-zinc-400 text-sm">
            Your account has been blocked by an administrator.
            Please contact support if you think this is a mistake.
          </p>
        </div>
      </div>
    );
  }

  return children;
}