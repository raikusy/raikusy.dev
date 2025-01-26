import { getPostBySlug } from "@/server/posts";
import { LineNumbers } from "@/components/organisms/line-numbers";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CalendarFold } from "lucide-react";
import dayjs from "dayjs";

export const runtime = "edge";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="flex-1 min-h-full">
        <div className="flex-1 min-h-full font-mono">
          <div className="flex rounded-lg bg-card">
            <LineNumbers lines={10} />
            <div className="space-y-8 pl-8 py-4 w-full">
              <div className="space-y-2">
                <span className="text-orange-400">
                  &quot;Post not found&quot;
                </span>
                <span className="text-muted-foreground">;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 min-h-full">
      <div className="flex-1 min-h-full font-mono">
        <div className="flex rounded-lg bg-card">
          <LineNumbers lines={40} />

          <div className="space-y-8 pl-8 py-4 w-full max-w-4xl">
            {/* Post Header */}
            <div className="space-y-2">
              <span className="text-blue-400">const </span>
              <span className="text-purple-400">post </span>
              <span className="text-muted-foreground">= {"{"}</span>
            </div>

            <div className="pl-4 space-y-6">
              {/* Title */}
              <div className="flex items-center gap-2">
                <span className="text-purple-400">title</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-orange-400">
                  &quot;{post?.title}&quot;
                </span>
                <span className="text-muted-foreground">,</span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2">
                <span className="text-purple-400">publishedAt</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-muted-foreground flex items-center gap-2">
                  <CalendarFold className="w-4 h-4" />
                  {dayjs(post.publishedAt).format("MMMM D, YYYY")}
                </span>
                <span className="text-muted-foreground">,</span>
              </div>

              {/* Cover Image */}
              {post.coverImage?.url && (
                <div className="space-y-2">
                  <span className="text-purple-400">coverImage</span>
                  <span className="text-muted-foreground">: </span>
                  <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                    <Image
                      alt={post.title}
                      className="object-cover"
                      fill
                      src={post.coverImage.url}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <span className="text-muted-foreground">,</span>
                </div>
              )}

              {/* Content */}
              <div className="space-y-2">
                <span className="text-purple-400">content</span>
                <span className="text-muted-foreground">: `</span>
                <div
                  className={cn(
                    "prose prose-invert max-w-none",
                    "prose-pre:bg-muted prose-pre:border prose-pre:border-border",
                    "prose-headings:text-foreground prose-a:text-primary",
                    "prose-strong:text-foreground prose-code:text-foreground"
                  )}
                  dangerouslySetInnerHTML={{ __html: post?.content?.html }}
                />
                <span className="text-muted-foreground">`,</span>
              </div>
            </div>

            <div className="text-muted-foreground">{"};"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
