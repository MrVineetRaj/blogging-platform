// File: models/blog-content.js
import { model, models, Schema } from "mongoose";
import BlogDetailModel from "./blog-details"; // Ensure this import is present

const blogContentSchema = new Schema({
  blog: {
    type: Schema.Types.ObjectId,
    ref: "BlogDetails", // This should match BlogDetailModel
    required: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
});

const BlogContentModel =
  models.BlogContent || model("BlogContent", blogContentSchema);
export default BlogContentModel;
