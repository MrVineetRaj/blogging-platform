"use client";
import { formateDate } from "@/lib/utility";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";

const Preview = ({ content }) => {
  useEffect(() => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    if (content.created_at) {
      const temp = content.created_at;
      console.log(
        ` ${temp.getDate()} ${months[temp.getMonth()]} ${temp.getFullYear()}, ${
          weekdays[temp.getDay()]
        }`
      );
    }
  });
  return (
    <div className="flex-[0.5] border rounded-md p-4">
      <h1>{content.title}</h1>
      <h2>{content.sub_title}</h2>
      <p>{formateDate(content.created_at)}</p>
      <ReactMarkdown className="markdown-content">
        {content.content || ""}
      </ReactMarkdown>
    </div>
  );
};

export default Preview;
