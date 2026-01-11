import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "lib/middleware";

export const getSessionFn = createServerFn().middleware([authMiddleware]).handler(
    async ({ context }) => {
        return context.session;
    }
)