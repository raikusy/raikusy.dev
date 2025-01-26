import AwsIcon from "@/components/icons/aws-icon";
import MongodbIcon from "@/components/icons/mongodb-icon";
import NestjsIcon from "@/components/icons/nestjs-icon";
import NextjsIcon from "@/components/icons/nextjs-icon";
import NodejsIcon from "@/components/icons/nodejs-icon";
import PostgresIcon from "@/components/icons/postgres-icon";
import ReactIcon from "@/components/icons/react-icon";
import TypescriptIcon from "@/components/icons/typescript-icon";
import { LineNumbers } from "@/components/organisms/line-numbers";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  return (
    <div className="flex-1 min-h-full">
      <div className="flex-1 min-h-full font-mono">
        <div className="flex rounded-lg bg-card">
          <LineNumbers lines={20} />

          <div className="space-y-6 pl-8">
            <div className="space-y-2">
              <span className="text-blue-400">import</span>
              <span className="text-purple-400">{` { Developer } `}</span>
              <span className="text-blue-400"> from </span>
              <span className="text-orange-400">
                &quot;https://github.com/raikusy&quot;
              </span>
              <span className="text-muted-foreground">;</span>
            </div>

            <div className="space-y-2">
              <span className="text-blue-400">const </span>
              <span className="text-purple-400">name </span>
              <span className="text-muted-foreground">= </span>
              <span className="text-orange-400">
                &quot;MD Rakibul Hasan&quot;
              </span>
              <span className="text-muted-foreground">;</span>
            </div>

            <div className="space-y-2">
              <span className="text-blue-400">const </span>
              <span className="text-purple-400">role </span>
              <span className="text-muted-foreground">= </span>
              <span className="text-orange-400">
                &quot;Full-stack Developer&quot;
              </span>
              <span className="text-muted-foreground">;</span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-blue-400">const </span>
                <span className="text-purple-400">skills </span>
                <span className="text-muted-foreground">= [</span>
              </div>

              <div className="grid grid-cols-2 gap-4 pl-4 sm:grid-cols-3 md:grid-cols-4">
                {skills.map(({ icon: Icon, name }, index) => (
                  <div
                    key={name}
                    className={cn(
                      "flex cursor-pointer items-center gap-2 rounded-md border border-transparent bg-muted/50 px-4 py-2 text-sm",
                      "transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-muted hover:shadow-lg"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>

              <div className="text-muted-foreground">];</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
