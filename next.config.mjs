import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

import { fileURLToPath } from "node:url";
import createJiti from "jiti";
const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./src/env/server");
jiti("./src/env/client");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default nextConfig;
