import { getPosts } from "../server/posts";
import ArticleCard from "@/components/organisms/article-card";

export default async function Blog() {
  const posts = await getPosts();
  return (
    <section className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
