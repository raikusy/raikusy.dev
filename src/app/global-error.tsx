"use client";
import { ClientLayout } from "@/components/layouts/client-layout";

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <ClientLayout>
          <h2>Something went wrong!</h2>
          <button onClick={() => reset()}>Try again</button>
        </ClientLayout>
      </body>
    </html>
  );
}
