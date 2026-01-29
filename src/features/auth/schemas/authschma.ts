import z from "zod";

export const UserNameSchema = z.object({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters")
        .max(15, "Username must be at most 15 characters")
        .lowercase("Username must be in lowercase")
        .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores allowed"),
});