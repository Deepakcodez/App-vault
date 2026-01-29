import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@/trpc/trpc-server/routers/_app";

export const trpc = createTRPCReact<AppRouter>();