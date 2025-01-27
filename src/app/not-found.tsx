const notFoundCodes = [
  {
    tokens: ["throw ", "new ", "Error(", "'Page not found'", ")", ";"],
    classNames: [
      "text-blue-500",
      "text-yellow-500",
      "text-red-500",
      "text-orange-500",
      "text-red-500",
      "text-muted-foreground",
    ],
  },
];

export default function NotFound() {
  return (
    <div className="space-y-2">
      {notFoundCodes.map(({ tokens, classNames }, index) => (
        <div key={index}>
          {tokens.map((token, index) => (
            <span key={index} className={classNames[index]}>
              {token}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
