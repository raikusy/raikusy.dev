import { Suspense } from "react";
import { PostsData } from "@/components/organisms/posts-data";
import { getPosts } from "@/server/posts";

export const runtime = "edge";

export default async function Blog({
  searchParams,
}: {
  searchParams: { q: string; cursor: string };
}) {
  getPosts({
    query: searchParams.q,
    cursor: searchParams.cursor,
  });

  return (
    <>
      <div className="space-y-2 max-w-4xl">
        {/* Blog Section */}
        <div className="space-y-2">
          <span className="text-blue-400">const </span>
          <span className="text-purple-400">BlogPosts </span>
          <span className="text-muted-foreground">= </span>
          <span className="text-blue-400">() =&gt; </span>
          <span className="text-muted-foreground">{"{"}</span>
        </div>

        {/* Search Section */}
        {searchParams.q && (
          <div className="space-y-2">
            <span className="text-blue-400">const </span>
            <span className="text-purple-400">search </span>
            <span className="text-muted-foreground">= </span>
            <span className="text-blue-400">`{searchParams.q}`</span>;
          </div>
        )}

        {/* Posts */}
        <Suspense fallback={<div>Loading...</div>}>
          <PostsData query={searchParams.q} cursor={searchParams.cursor} />
        </Suspense>

        <div className="text-muted-foreground">{"}"}</div>
      </div>
    </>
  );
}
