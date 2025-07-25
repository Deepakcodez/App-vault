import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient();

export const { signIn, signUp, signOut, useSession } = createAuthClient({
  baseURL : process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000 "
});

