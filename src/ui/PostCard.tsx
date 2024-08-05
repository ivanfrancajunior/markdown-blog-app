import Link from "next/link";
import React from "react";

const PostCard = (props: any) => {
  const { post } = props;

  return (
    <div>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
        <p>{post.subtitle}</p>
      </Link>
    </div>
  );
};

export default PostCard;
