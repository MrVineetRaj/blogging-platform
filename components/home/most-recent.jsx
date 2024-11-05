import React from "react";

const MostRecent = () => {
  return (
    <div>
      {example_blog_details.map((blog, index) => {
        const { title, sub_title, created_at } = blog;

        return (
          <div className="" key={index}>
            <h2>{title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default MostRecent;
