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

export interface SearchPostResponse {
  data: {
    edges: Array<{
      node: Post;
      cursor: string;
    }>;
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
  };
}

export interface PostFilters {
  query?: string;
  tags?: Array<string>;
  cursor?: string;
}

export async function getPosts(filter: PostFilters = {}) {
  const publicationId = serverEnv.HASHNODE_PUBLICATION_ID;

  const variables: Record<string, any> = {
    first: 10,
    sortBy: "DATE_PUBLISHED_DESC",
    filter: {
      publicationId,
      query: filter.query ?? "",
    },
  };

  if (filter.cursor) {
    variables.after = filter.cursor;
  }

  if (filter.query) {
    variables.filter = {
      ...variables.filter,
      query: filter.query,
    };
  }

  if (filter.tags) {
    variables.filter = {
      ...variables.filter,
      tags: filter.tags,
    };
  }

  const { data } = await query({
    query: `
      query SearchPostsOfPublication($first: Int!, $after: String, $sortBy: PostSortBy, $filter: SearchPostsOfPublicationFilter!) {
        searchPostsOfPublication(
          first: $first
          after: $after
          sortBy: $sortBy
          filter: $filter
        ) {
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
            cursor
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `,
    variables,
  });

  const posts: Array<Post> =
    data?.searchPostsOfPublication?.edges?.map(
      ({ node }: { node: Post }) => node
    ) ?? [];
  const pageInfo = data?.searchPostsOfPublication?.pageInfo;
  return { posts, pageInfo };
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
