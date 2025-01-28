import AwsIcon from "@/components/icons/aws-icon";
import MongodbIcon from "@/components/icons/mongodb-icon";
import NestjsIcon from "@/components/icons/nestjs-icon";
import NextjsIcon from "@/components/icons/nextjs-icon";
import NodejsIcon from "@/components/icons/nodejs-icon";
import PostgresIcon from "@/components/icons/postgres-icon";
import ReactIcon from "@/components/icons/react-icon";
import TypescriptIcon from "@/components/icons/typescript-icon";
import { useMemo } from "react";

const skills = [
  { icon: TypescriptIcon, name: "TypeScript" },
  { icon: ReactIcon, name: "React" },
  { icon: NextjsIcon, name: "Next.js" },
  { icon: NodejsIcon, name: "Node.js" },
  { icon: NestjsIcon, name: "Nest.js" },
  { icon: PostgresIcon, name: "PostgreSQL" },
  { icon: MongodbIcon, name: "MongoDB" },
  { icon: AwsIcon, name: "AWS" },
];

export default function Home() {
  const codes = useMemo(
    () => [
      {
        tokens: [
          "import { ",
          "Developer",
          " }",
          " from ",
          '"https://github.com/raikusy"',
          ";",
        ],
        classNames: [
          "text-yellow-500",
          "text-purple-500",
          "text-yellow-500",
          "text-yellow-500",
          "text-orange-500",
          "text-muted-foreground",
        ],
      },
      {
        tokens: ["const ", "developer", " = ", "new ", "Developer", "()", ";"],
        classNames: [
          "text-yellow-500",
          "text-purple-500",
          "text-yellow-500",
          "text-red-500",
          "text-yellow-500",
          "text-muted-foreground",
        ],
      },
      {
        tokens: ["developer.", "name", " = ", '"MD Rakibul Hasan"', ";"],
        classNames: [
          "text-purple-500",
          "text-blue-500",
          "text-yellow-500",
          "text-orange-500",
          "text-muted-foreground",
        ],
      },
      {
        tokens: ["developer.", "role", " = ", '"Full-stack Developer"', ";"],
        classNames: [
          "text-purple-500",
          "text-blue-500",
          "text-yellow-500",
          "text-orange-500",
          "text-muted-foreground",
        ],
      },
      {
        tokens: [
          "developer.",
          "skills",
          " = ",
          "[",
          <div
            key="skills"
            className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 my-2 pl-4"
          >
            {skills.map(({ name, icon: Icon }) => (
              <Skill key={name} name={name} icon={Icon} />
            ))}
          </div>,
          "]",
          ";",
        ],
        classNames: [
          "text-purple-500",
          "text-blue-500",
          "text-yellow-500",
          "text-muted-foreground",
        ],
      },
    ],
    []
  );

  return (
    <div className="space-y-2 w-full max-w-full sm:max-w-2xl md:max-w-4xl">
      {codes.map(({ tokens, classNames }, index) => (
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

function Skill({
  icon: Icon,
  name,
}: {
  icon: React.ElementType;
  name: string;
}) {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-md bg-background hover:bg-hover border border-transparent px-4 py-2 text-sm hover:border-primary">
      <Icon className="h-5 w-5" />
      <span>{name}</span>
    </div>
  );
}
