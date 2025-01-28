import ArticleCard from "@/components/organisms/article-card";
import { Pagination } from "@/components/organisms/pagination";
import { cn } from "@/lib/utils";
import { getPosts } from "@/server/posts";

export default async function Blog({
  searchParams,
}: {
  searchParams: { q: string; cursor: string };
}) {
  const { posts, pageInfo } = await getPosts({
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
        {posts.length > 0 ? (
          <>
            <div>
              <span className="text-blue-400">const </span>
              <span className="text-purple-400">posts </span>
              <span className="text-muted-foreground">= [</span>
            </div>

            <div className="flex flex-col gap-8">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className={cn(
                    "rounded-lg border border-transparent pl-4",
                    "bg-muted/50 hover:border-primary hover:bg-muted"
                  )}
                >
                  <ArticleCard post={post} />
                </div>
              ))}
            </div>

            <div className="text-muted-foreground">];</div>

            <Pagination pageInfo={pageInfo} />
          </>
        ) : (
          <div className="py-4 pl-4 text-muted-foreground">
            <span className="text-blue-400">throw </span>
            <span className="text-muted-foreground">new </span>
            <span className="text-red-400">Error</span>
            <span className="text-muted-foreground">(</span>
            <span className="text-orange-400">
              &quot;No blog posts found&quot;
            </span>
            <span className="text-muted-foreground">)</span>
            <span className="text-muted-foreground">;</span>
          </div>
        )}

        <div className="text-muted-foreground">{"}"}</div>
      </div>
    </>
  );
}
