import PostCard from "@/ui/PostCard";
import { getPostMetadata } from "@/utils/get-post-metadata";

export default function Home() {
  const PostMetadata = getPostMetadata("articles");

  return (
    <main className='flex  items-start justify-center w-full min-h-screen mx-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {PostMetadata.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
