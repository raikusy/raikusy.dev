import { getPosts } from "../../server/posts";
import ArticleCard from "@/components/organisms/article-card";
import { LineNumbers } from "@/components/organisms/line-numbers";
import { cn } from "@/lib/utils";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <>
      <div className="space-y-2">
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

          <div className="grid grid-cols-1 gap-8 pl-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className={cn(
                  "rounded-lg border border-transparent",
                  "bg-muted/50 hover:border-primary hover:bg-muted",
                  "transition-all duration-300"
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
