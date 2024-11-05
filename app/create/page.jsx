"use client";
import BlogInput from "@/components/create/input";
import Preview from "@/components/create/preview";
import { createBlogPost } from "@/lib/api/blogs";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CreateBlog = () => {
  const router = useRouter();
  const [content, setContent] = useState({
    title: "",
    created_at: "",
    sub_title: "",
    content: "",
    tag: "",
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const curr_date = new Date();
    setContent({
      ...content,
      created_at: curr_date,
    });
  }, []);
  return (
    <div className="w-full p-8">
      <div className="flex items-center justify-between mb-4">
        <h1>Create Blog</h1>
        <button
          className={clsx(
            " text-white px-2 py-1 rounded-md",
            loading ? "bg-blue-300" : "bg-blue-500"
          )}
          onClick={() => {
            console.log("Hello");
            setLoading(true);
            createBlogPost(content).then((res) => {
              if (res.status === 201) {
                router.push(`/${res.data._id}`);
              }
              setLoading(false);
            });
          }}
        >
          Create Blog
        </button>
      </div>
      <div className="flex flex-row gap-4 min-h-[600px] min-w-full">
        <BlogInput content={content} setContent={setContent} />
        <Preview content={content} />
      </div>
    </div>
  );
};

export default CreateBlog;
