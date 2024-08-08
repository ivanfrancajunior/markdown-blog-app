import React from "react";

const PostCard = (props: any) => {
  const { post } = props;

  return (
    <div className='card'>
      <h2 className="text-red-400">{post?.title}</h2>
      <p>{post?.subtitle}</p>
      <div className='tag'>
        {post.tags.map((tag: string) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
