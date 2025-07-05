
import { z } from "zod";

export const formSchema = z.object({
  appName: z.string().min(1, "App Name is required"),
  description: z.string().min(1, "Description is required"),
  stack: z.array(z.string().min(1, "Tech stack item cannot be empty")),
  features: z.array(z.string().min(1, "Feature cannot be empty")),
  repo: z.string().url("Invalid repository URL").optional(),
  link: z.string().url("Invalid project link"),
  tutorial: z.string().url("Invalid tutorial URL").optional(),
});
