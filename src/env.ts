import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    HASHNODE_TOKEN: z.string().min(1),
    HASHNODE_HOST: z.string().min(1),
    HASHNODE_GQL: z.string().min(1),
  },
  client: {},
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    HASHNODE_HOST: process.env.HASHNODE_HOST,
    HASHNODE_TOKEN: process.env.HASHNODE_TOKEN,
    HASHNODE_GQL: process.env.HASHNODE_GQL,
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  // experimental__runtimeEnv: {
  //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // }
});

class Developer {
  public name: string = "John";
  public age: number = 30;
  public skills: string[] = ["JavaScript", "TypeScript", "React", "Next.js"];
}

const developer = new Developer();

developer.name = "Jane";
developer.skills = ["Javascript"];
