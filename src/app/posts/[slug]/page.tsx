import React from "react";
import Markdown from "markdown-to-jsx";
import { getPostMetadata } from "@/utils/get-post-metadata";
import fs from "fs";
import matter from "gray-matter";
import PrismWrapper from "@/ui/PrismWrapper";

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
  return {
    title: post.data.title,
    description: post.data.subtitle,
  };
}

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className='flex flex-col items-start justify-center gap-8 mx-auto'>
      <h2 className='text-[#4b855d] text-3xl'>{post.data.title}</h2>

      <h3 className='text-white font-thin text-2xl italic'>{post.data.subtitle}</h3>

      <hr  className="bg-white h-[1px] w-full"/>
      <article>
        <PrismWrapper>
          <Markdown
            className='prism'
            options={{
              forceBlock: true,
            }}
          >
            {post.content}
          </Markdown>
        </PrismWrapper>
      </article>
    </div>
  );
};

export default PostPage;
