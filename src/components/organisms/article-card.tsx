import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ArrowRightIcon, CalendarFold } from "lucide-react";
import { Post } from "@/app/server/posts";
import dayjs from "dayjs";

const ArticleCard = ({ post }: { post: Post }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden">
      <Image
        alt={post.title}
        className="w-full h-48 object-cover"
        height={400}
        width={600}
        src={
          post.coverImage?.url ??
          `https://placehold.co/600x400.webp?text=raikusy.dev`
        }
        style={{
          aspectRatio: "600/400",
          objectFit: "cover",
        }}
      />
      <div className="p-6 bg-white dark:bg-gray-900">
        <h3 className="text-xl font-bold mb-2">
          <Link
            className="hover:text-primary-500 transition-colors"
            href={`/blog/${post.slug}`}
          >
            {post.title}
          </Link>
        </h3>

        <div className="flex items-center mb-4">
          <span className="text-gray-500 dark:text-gray-400 text-sm flex gap-2 items-center">
            <CalendarFold className="w-4 h-4" />
            {dayjs(post.publishedAt).format("MMMM D, YYYY")}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{post.brief}</p>
        <Link
          className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
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
