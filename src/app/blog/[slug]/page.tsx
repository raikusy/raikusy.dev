import { Markdown } from "@/components/organisms/markdown";
import { getPostBySlug, getPosts } from "@/server/posts";
import dayjs from "dayjs";
import { CalendarFold } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const { posts } = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="space-y-2">
      {/* Post Header */}
      <div>
        <span className="text-blue-400">const </span>
        <span className="text-purple-400">Post </span>
        <span className="text-muted-foreground">= {"{"}</span>
      </div>

      <div className="pl-4 space-y-2">
        {/* Title */}
        <div className="flex items-center gap-2">
          <span className="text-purple-400">title</span>
          <span className="text-muted-foreground">: </span>
          <h2 className="text-orange-400">&quot;{post?.title}&quot;</h2>
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
          <div className="pl-4 border border-border rounded-md p-4 my-2">
            <Markdown>{post.content.markdown}</Markdown>
          </div>
          <span className="text-muted-foreground">`,</span>
        </div>
      </div>

      <div className="text-muted-foreground">{"};"}</div>
    </div>
  );
}
