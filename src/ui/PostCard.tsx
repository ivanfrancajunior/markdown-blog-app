import Link from "next/link";
import React from "react";

const PostCard = (props: any) => {
  const { post } = props;

  return (
    <div>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
        <p>{post.subtitle}</p>
        <div className='tag'>
          {post.tags.map((tag: string) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
