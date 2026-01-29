import { appRouter } from "@/trpc/trpc-server/routers/_app";

export const createCaller = () => {
    return appRouter.createCaller({});
};