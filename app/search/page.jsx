"use client";
import BlogCard from "@/components/blog-card";
import LoadingBlogCard from "@/components/loading/loading-blog-card";
import { getBlogs } from "@/lib/api/blogs";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchPage = () => {
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    const search_query = searchParams.get("search_query") || "";
    setLoading(true);
    console.log(search_query);
    getBlogs("most-recent", search_query).then((res) => {
      setBlogs(res.data);
      setLoading(false);
    });
  }, [searchParams]);

  if (loading) {
    return (
      <div className="flex mt-4 flex-col gap-4">
        <LoadingBlogCard />
      </div>
    );
  }

  return (
    <div className="flex mt-4 flex-col gap-4 px-20 w-[80%]">
      {blogs?.map((blog, index) => {
        return <BlogCard blog={blog} key={index} />;
      })}
    </div>
  );
};

export default SearchPage;
