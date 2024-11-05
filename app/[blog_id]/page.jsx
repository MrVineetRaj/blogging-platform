import BlogContainer from "@/components/blog-container";
import React from "react";

const BlogPage = async ({ params }) => {
  const blog_id = (await params).blog_id;

  return (
    <main>
      <BlogContainer blog_id={blog_id} />
    </main>
  );
};

export default BlogPage;
