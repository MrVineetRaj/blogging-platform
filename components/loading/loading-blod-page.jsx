import React from "react";

const LoadingBlogPage = () => {
  return (
    <div className="min-w-[100svw]">
      <div className="min-w-full min-h-48 animate-pulse bg-gray-200" />

      <div className="min-w-full min-h-48 flex flex-col items-center px-72  pt-8">
        <div className="bg-gray-100 border shadow-lg mb-8 -mt-20 w-full min-h-[800px] p-6 animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingBlogPage;
