import { cn } from "@/lib/utils";
import { getPosts } from "@/server/posts";
import ArticleCard from "./article-card";
import { Pagination } from "./pagination";

export async function PostsData({
  query,
  cursor,
}: {
  query: string;
  cursor: string;
}) {
  const { posts, pageInfo } = await getPosts({ query, cursor });
  return (
    <>
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
                  "rounded-lg border border-transparent",
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
    </>
  );
}
