import { env } from "@/env";
import { query } from "@/lib/hashnode";

export interface Post {
  coverImage: {
    url: string;
  };
  id: string;
  publishedAt: string;
  slug: string;
  title: string;
  brief: string;
  tags: Array<{
    name: string;
    slug: string;
    id: string;
  }>;
}

export const getPosts = async () => {
  const {
    data: { publication },
  } = await query({
    query: `
      query ($host: String!) {
        publication(host: $host) {
          posts(first: 10) {
            edges {
              node {
                coverImage {
                  url
                }
                id
                publishedAt
                slug
                title
                brief
                tags {
                  name
                  slug
                  id
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      host: env.HASHNODE_HOST,
    },
  });
  const posts: Array<Post> = publication.posts.edges.map(
    ({ node }: { node: Post }) => node
  );
  return posts;
};
