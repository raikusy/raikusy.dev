"use client";

export function LineNumbers({ lines = 24 }: { lines?: number }) {
  return (
    <div className="flex h-full flex-col items-center border-r border-muted p-4 space-y-2 text-muted-foreground">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  );
}
