import { serverEnv } from "@/env/server";

interface Query {
  query: string;
  variables?: object;
  tags?: Array<string>;
}

export async function query({ query, variables, tags }: Query) {
  const data = await fetch(serverEnv.HASHNODE_GQL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${serverEnv.HASHNODE_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      tags,
    },
  })
    .then((r) => r.json())
    .catch((e) => console.error(e));

  return data;
}
