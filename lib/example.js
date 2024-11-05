const example_blog_details = [
  {
    _id: 1,
    title: "First Blog",
    created_at: "20 feb 2024",
    sub_title: "Literally first blog",
    views: 20,
  },
  {
    _id: 2,
    title: "Second Blog",
    created_at: "20 feb 2024",
    sub_title: "Literally Second blog",
    views: 20,
  },
  {
    _id: 3,
    title: "Third Blog",
    created_at: "20 feb 2024",
    sub_title: "Literally Third blog",
    views: 20,
  },
  {
    _id: 4,
    title: "Fourth Blog",
    created_at: "20 feb 2024",
    sub_title: "Literally Fourth blog",
    views: 20,
  },
  {
    _id: 5,
    title: "Fifth Blog",
    created_at: "20 feb 2024",
    sub_title: "Literally Fifth blog",
    views: 20,
  },
  {
    _id: 6,
    title: "Sixth Blog",
    created_at: "20 feb 2024",
    sub_title: "Literally Sixth blog",
    views: 20,
  },
];

const example_blog_content = `
Yes, the provided code will work with a few clarifications:

### Key Points of the Code:
1. **Type Safety for Content**: The line \`content: example_blog_content || ""\` ensures that if \`example_blog_content\` is undefined or null, it will fall back to an empty string. This guarantees that \`blogContent.content\` is always a string when passed to the \`ReactMarkdown\` component.

2. **Loading State**: The conditional rendering checks if \`blogContent\` is null. If it is, it displays a loading message (\`<div>Loading...</div>\`) until the content is set. This is good practice for managing asynchronous data fetching and ensuring the UI does not break while waiting for data.

3. **Rendering Markdown**: The \`ReactMarkdown\` component will correctly render the markdown content since \`blogContent.content\` is guaranteed to be a string.

### Here’s the Complete Code Again for Reference:
\`\`\`cpp
"use client";

import { example_blog_content, example_blog_details } from "@/lib/example";
import { randomColor } from "@/lib/utility";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const BlogContainer = ({ blog_id }) => {
  const [blogContent, setBlogContent] = useState(null);
  const [bannerColor, setBannerColor] = useState("");

  useEffect(() => {
    // Load blog content and generate a random banner color
    setBlogContent({
      details: example_blog_details[2],
      content: example_blog_content || "", // Ensure content is always a string
    });
    setBannerColor(randomColor());
  }, [blog_id]);

  if (!blogContent) {
    return <div>Loading...</div>; // Show loading state while content is fetched
  }

  return (
    <div className="min-w-[100svw]">
      {/* Banner Section */}
      <div
        className="min-w-full min-h-48 flex flex-col items-center px-72 pt-8"
        style={{ background: bannerColor }}
      >
        <h1 className="w-full text-white text-3xl font-bold">
          {blogContent.details.title}
        </h1>
        <h2 className="w-full text-gray-200 text-xl">
          {blogContent.details.sub_title}
        </h2>
        <p className="w-full text-gray-200 text-sm">
          {blogContent.details.created_at}
        </p>
      </div>

      {/* Content Section */}
      <div className="min-w-full min-h-48 flex flex-col items-center px-72 pt-8">
        <div className="bg-white border shadow-lg mb-8 -mt-20 w-full min-h-[600px] p-6">
          {/* Ensure content is a string, fallback to empty string */}
          <ReactMarkdown className="markdown-content">
            {blogContent.content || ""}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
\`\`\`

### Conclusion
- The code is well-structured for rendering a blog post with a dynamic banner color and markdown content.
- Just ensure that the \`example_blog_content\` and \`example_blog_details\` are correctly defined and accessible in your project.

If you have any specific concerns or would like to add additional features (like custom styling for the markdown content), feel free to ask!
`;

export { example_blog_details, example_blog_content };
