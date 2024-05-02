import { env } from "@/env";

interface Query {
  query: string;
  variables?: object;
  tags?: Array<string>;
}

export async function query({ query, variables, tags }: Query) {
  const data = await fetch(env.HASHNODE_GQL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${env.HASHNODE_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      tags,
    },
  }).then((r) => r.json());
  return data;
}
