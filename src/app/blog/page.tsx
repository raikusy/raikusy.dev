import ArticleCard from "@/components/organisms/article-card";
import { cn } from "@/lib/utils";
import { getPosts } from "@/server/posts";

export default async function Blog() {
  const posts = await getPosts();

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

        <div className="pl-4 space-y-6">
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

          {posts.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <span className="text-orange-400">
                &quot;No blog posts found&quot;
              </span>
            </div>
          )}
        </div>

        <div className="text-muted-foreground">{"}"}</div>
      </div>
    </>
  );
}
