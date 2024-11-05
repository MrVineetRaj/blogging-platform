"use client";
import { example_blog_details } from "@/lib/example";
import React, { useEffect, useState } from "react";
import BlogCard from "../blog-card";
import { getBlogs } from "@/lib/api/blogs";
import LoadingBlogCard from "../loading/loading-blog-card";

const MostRead = () => {
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getBlogs("most-read").then((res) => {
      setBlogs(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex mt-4 flex-col gap-4">
        <LoadingBlogCard />
      </div>
    );
  }
  return (
    <div className="flex mt-4 flex-col gap-4 sm:px-20">
      {blogs?.map((blog, index) => {
        return <BlogCard blog={blog} key={index} />;
      })}
    </div>
  );
};

export default MostRead;
