import React from "react";
import Markdown from "markdown-to-jsx";
import { getPostMetadata } from "@/utils/get-post-metadata";
import fs from "fs";
import matter from "gray-matter";

export const getPostContent = (slug: string) => {
  const folder = "articles";
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const PostMetadata = getPostMetadata("articles");
  return PostMetadata.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata({ params, searchParams }: any) {
  const post = getPostContent(params.slug);
  const id = params?.slug ? "." + params.slug : " ";
  return {
    title: post.data.title,
    description: post.data.subtitle,
  };
}

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <h2>{post.data.title}</h2>
      <h3>{post.data.subtitle}</h3>
        <Markdown options={{ forceBlock: true }}>{post.content}</Markdown>
    </div>
  );
};

export default PostPage;
