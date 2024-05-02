import AwsIcon from "@/components/icons/aws-icon";
import MongodbIcon from "@/components/icons/mongodb-icon";
import NestjsIcon from "@/components/icons/nestjs-icon";
import NextjsIcon from "@/components/icons/nextjs-icon";
import NodejsIcon from "@/components/icons/nodejs-icon";
import PostgresIcon from "@/components/icons/postgres-icon";
import ReactIcon from "@/components/icons/react-icon";
import TypescriptIcon from "@/components/icons/typescript-icon";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex-1 bg-gray-100 p-8 dark:bg-gray-800">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            MD Rakibul Hasan
          </h1>
          <h2 className="text-3xl font-medium text-gray-600 dark:text-gray-400">
            Full-stack Developer
          </h2>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
            Skills
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <div className="rounded-md bg-gray-200 px-6 py-3 text-gray-900 dark:bg-gray-700 dark:text-gray-200 flex gap-2 transition-all hover:bg-slate-300 hover:cursor-pointer border border-gray-200 hover:border-slate-500 duration-500">
              <TypescriptIcon className="h-6 w-6" />
              TypeScript
            </div>
            <div className="rounded-md bg-gray-200 px-4 py-2 text-gray-900 dark:bg-gray-700 dark:text-gray-200 flex gap-2">
              <ReactIcon className="h-6 w-6" />
              React
            </div>
            <div className="rounded-md bg-gray-200 px-4 py-2 text-gray-900 dark:bg-gray-700 dark:text-gray-200 flex gap-2">
              <NextjsIcon className="h-6 w-6" />
              Next.js
            </div>
            <div className="rounded-md bg-gray-200 px-4 py-2 text-gray-900 dark:bg-gray-700 dark:text-gray-200 flex gap-2">
              <NodejsIcon className="h-6 w-6" />
              Node.js
            </div>
            <div className="rounded-md bg-gray-200 px-4 py-2 text-gray-900 dark:bg-gray-700 dark:text-gray-200 flex gap-2">
              <NestjsIcon className="h-6 w-6" />
              Nest.js
            </div>
            <div className="rounded-md bg-gray-200 px-4 py-2 text-gray-900 dark:bg-gray-700 dark:text-gray-200 flex gap-2">
              <PostgresIcon className="h-6 w-6" />
              PostgreSQL
            </div>
            <div className="rounded-md bg-gray-200 px-4 py-2 text-gray-900 dark:bg-gray-700 dark:text-gray-200 flex gap-2">
              <MongodbIcon className="h-6 w-6" />
              MongoDB
            </div>
            <div className="rounded-md bg-gray-200 px-4 py-2 text-gray-900 dark:bg-gray-700 dark:text-gray-200 flex gap-2">
              <AwsIcon className="h-6 w-6" />
              AWS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
