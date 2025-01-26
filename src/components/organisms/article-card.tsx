"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, CalendarFold } from "lucide-react";
import { Post } from "@/app/server/posts";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";

const ArticleCard = ({ post }: { post: Post }) => {
  return (
    <div className="overflow-hidden rounded-md h-full flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          alt={post.title}
          className="object-cover"
          fill
          src={
            post.coverImage?.url ??
            `https://placehold.co/600x400.webp?text=raikusy.dev`
          }
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">
          <Link
            className="hover:text-primary transition-colors"
            href={`/blog/${post.slug}`}
          >
            {post.title}
          </Link>
        </h3>

        <div className="flex items-center mb-4">
          <span className="text-muted-foreground text-sm flex gap-2 items-center">
            <CalendarFold className="w-4 h-4" />
            {dayjs(post.publishedAt).format("MMMM D, YYYY")}
          </span>
        </div>

        <p className="text-muted-foreground mb-4 flex-1">{post.brief}</p>

        <Link
          className={cn(
            "inline-flex items-center text-primary",
            "hover:text-primary/90 transition-colors"
          )}
          href={`/blog/${post.slug}`}
        >
          Read more
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
