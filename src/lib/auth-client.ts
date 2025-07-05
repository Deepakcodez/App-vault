import { createAuthClient } from "better-auth/react" // make sure to import from better-auth/react
 
export const {signIn, signOut, useSession} =  createAuthClient({
   baseURL : process.env.NEXT_BASE_URL || "http://localhost:3000 "
})