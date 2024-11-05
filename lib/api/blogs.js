import axios from "axios";

const createBlogPost = async (data) => {
  const { title, sub_title, tag, content } = data;

  console.log("Here !");
  const res = await axios.post("/api/blog", {
    content,
    title,
    sub_title,
    tag,
  });

  console.log(res.data);
  return res.data;
};

const getBlogs = async (sorting_option = "", search_query = "") => {
  const res = await axios.get(
    `/api/blog?sorting_option=${sorting_option}&search_query=${search_query}`
  );

  console.log(res.data);
  return res.data;
};

const getBlogPost = async (blog_id) => {
  // console.log(blog_id);
  const res = await axios.get(`/api/blog/${blog_id}`);

  // console.log(res.data);
  return res.data;
};

export { createBlogPost, getBlogPost, getBlogs };
