"use client";
import { formateDate } from "@/lib/utility";
import { useRouter } from "next/navigation";
import React from "react";

const BlogCard = ({ blog }) => {
  const router = useRouter();
  const { title, sub_title, created_at, views, _id, tag } = blog;

  return (
    <div
      className=" w-full  px-4 py-2 flex border rounded-lg border-transparent items-center gap-4 hover:border-gray-200  hover:shadow-md cursor-pointer transition-all duration-150"
      onClick={() => {
        router.push(`/${_id}`);
      }}
    >
      <div className="size-16 bg-red-400 rounded-md">
        <img
          src={`/images/${tag}.png`}
          alt="Loading"
          className="size-full rounded-md"
        />
      </div>
      <span className="flex items-center justify-between w-full">
        <span>
          <h2>{title}</h2>
          <p className="line-clamp-1">{sub_title}</p>
          <p className="text-xs">{formateDate(created_at)}</p>
        </span>
        <span className="">
          <p className="text-xs">{views}</p>
        </span>
      </span>
    </div>
  );
};

export default BlogCard;
