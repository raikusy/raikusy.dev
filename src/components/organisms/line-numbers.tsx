"use client";

export function LineNumbers({ lines = 20 }: { lines: number }) {
  return (
    <div className="flex h-full flex-col items-end border-r border-muted p-4 text-lg gap-2 text-muted-foreground">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="leading-7">
          {i + 1}
        </div>
      ))}
    </div>
  );
}
