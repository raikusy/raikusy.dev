import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
  server: {
    HASHNODE_TOKEN: z.string().min(1),
    HASHNODE_HOST: z.string().min(1),
    HASHNODE_GQL: z.string().min(1),
    WEB3FORMS_API_KEY: z.string().min(1),
  },
  experimental__runtimeEnv: process.env,
});
