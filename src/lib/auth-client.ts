import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient();

export const { signIn, signOut, useSession } = createAuthClient({
  // baseURL : process.env.NEXT_BASE_URL || "http://localhost:3000 "
});

