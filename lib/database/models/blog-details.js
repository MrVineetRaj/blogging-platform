// File: models/blog-details.js
import { model, models, Schema } from "mongoose";

const blogDetailSchema = new Schema({
  title: { type: String, required: true, trim: true },
  tag: { type: String, required: true, trim: true },
  sub_title: { type: String, required: true, trim: true },
  created_at: {
    type: Date,
    default: Date.now,
  },
  views: {
    type: Number,
    default: 0,
  },
});

const BlogDetailModel =
  models.BlogDetails || model("BlogDetails", blogDetailSchema);
export default BlogDetailModel;
