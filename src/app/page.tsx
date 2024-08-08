import PostCard from "@/ui/PostCard";
import { getPostMetadata } from "@/utils/get-post-metadata";
import Link from "next/link";

export default function Home() {
  const PostMetadata = getPostMetadata("articles");

  return (
    <main className='flex  items-start justify-center w-7xl min-h-screen mx-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {PostMetadata.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug} className="p-4 border border-[#1a1a1a] rounded-md hover:border hover:border-cyan-900">
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </main>
  );
}
