"use client";

import { getBlogPost } from "@/lib/api/blogs";
import { example_blog_content, example_blog_details } from "@/lib/example";
import { formateDate, randomColor } from "@/lib/utility";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import LoadingBlogPage from "./loading/loading-blod-page";

const BlogContainer = ({ blog_id }) => {
  const [blogContent, setBlogContent] = useState(null);
  const [bannerColor, setBannerColor] = useState("");

  useEffect(() => {
    // Load blog content and generate a random banner color
    // setBlogContent({
    //   details: example_blog_details[2],
    //   content: example_blog_content || "", // Ensure content is always a string
    // });

    getBlogPost(blog_id).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setBlogContent(res.data);
      }
    });
    setBannerColor(randomColor());
  }, [blog_id]);

  if (!blogContent) {
    return <LoadingBlogPage />; // Show loading state while content is fetched
  }

  return (
    <div className="sm:min-w-[100%]">
      {/* Banner Section */}
      <div
        className="min-w-full min-h-48 flex flex-col items-center sm:px-72 pt-8 px-4"
        style={{ background: bannerColor }}
      >
        <h1 className="w-full text-white text-3xl font-bold">
          {blogContent?.blog?.title}
        </h1>
        <h2 className="w-full text-gray-200 text-xl">
          {blogContent?.blog?.sub_title}
        </h2>
        <p className="w-full text-gray-200 text-sm">
          {formateDate(blogContent?.blog?.created_at)}
        </p>
      </div>

      {/* Content Section */}
      <div className="min-w-full min-h-48 flex flex-col items-center px-2 sm:px-72 pt-8">
        <div className="bg-white border shadow-lg mb-8 -mt-20 w-full min-h-[600px] px-4 sm:p-6">
          {/* Ensure content is a string, fallback to empty string */}
          <ReactMarkdown className="markdown-content">
            {blogContent?.content || ""}
          </ReactMarkdown>
        </div>
      </div>

      {/* <span className="fixed min-w-10 min-h-10 right-4 bottom-4 bg-gray-100 border-2 border-blue-500 rounded-full flex items-center justify-center">
        {blogContent?.blog?.views}
      </span> */}
    </div>
  );
};

export default BlogContainer;
