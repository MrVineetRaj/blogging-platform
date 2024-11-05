"use client";
import React from "react";

const BlogInput = ({ content, setContent }) => {
  return (
    <div className="flex-[0.5] flex flex-col gap-2  rounded-md">
      <input
        type="text"
        placeholder="Title"
        className="border  rounded-md p-2"
        onChange={(e) => {
          setContent({
            ...content,
            title: e.target.value,
          });
        }}
      />
      <input
        type="text"
        placeholder="Sub title"
        className="border  rounded-md p-2"
        onChange={(e) => {
          setContent({
            ...content,
            sub_title: e.target.value,
          });
        }}
      />
      <input
        type="text"
        placeholder="Tag"
        className="border  rounded-md p-2"
        onChange={(e) => {
          setContent({
            ...content,
            tag: e.target.value,
          });
        }}
      />
      <textarea
        placeholder="Content Here!"
        className="p-4 w-full  h-full border rounded-md"
        onChange={(e) => {
          setContent({
            ...content,
            content: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default BlogInput;
