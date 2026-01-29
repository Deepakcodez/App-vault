import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";


export async function createContext({ req }: { req: Request }) {
    const session = await auth.api.getSession({
        headers: req.headers
    });

    return {
        user: session?.user,
        session: session?.session,
        prisma,
    };
}

export type Context = Awaited<ReturnType<typeof createContext>>;