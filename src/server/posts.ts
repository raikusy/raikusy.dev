"use server";

import { serverEnv } from "@/env/server";
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
  content: {
    markdown: string;
    html: string;
  };
  tags: Array<{
    name: string;
    slug: string;
    id: string;
  }>;
}

export async function getPosts() {
  const {
    data: { publication },
  } = await query({
    query: `
      query Posts($host: String!) {
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
                content {
                  markdown
                  html
                }
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
      host: serverEnv.HASHNODE_HOST,
    },
  });
  const posts: Array<Post> =
    publication?.posts?.edges?.map(({ node }: { node: Post }) => node) ?? [];
  return posts;
}

export async function getPostBySlug(slug: string) {
  const { data } = await query({
    query: `
      query PostBySlug($host: String!, $slug: String!) {
        publication(host: $host) {
          post(slug: $slug) {
            coverImage {
              url
            }
            title
            brief
            content {
              markdown
              html
            }
            tags {
              name
              slug
              id
            }
          }
        }
      }
    `,
    variables: {
      host: serverEnv.HASHNODE_HOST,
      slug,
    },
  });
  return data?.publication?.post;
}
