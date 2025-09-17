import React from "react";
import { posts } from "@/data/posts";


const PostPage = async ({ params }) => {
  const { id } = await params
  const post = posts.find((p) => p.id == id);

  if (!post) return <h1>Post not found</h1>

  return (
    <div className="min-h-screen py-10 max-w-2xl mx-auto ">
        <h1>{post.title}</h1>
        <p className="text-gray-600">{post.description}</p>
        <p className="mt-10">{post.content}</p>
    </div>
  );
};

export default PostPage;
