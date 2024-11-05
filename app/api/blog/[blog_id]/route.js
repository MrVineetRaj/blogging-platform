import dbConnect from "@/lib/database/db-connection";
import BlogContentModel from "@/lib/database/models/blog-content";
import BlogDetailModel from "@/lib/database/models/blog-details"; // Import BlogDetails model
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  await dbConnect(); // Connect to the database

  const blog_id = params.blog_id;

  try {
    // Step 1: Find the BlogContentModel document and populate the 'blog' field
    const blogContent = await BlogContentModel.findOne({
      blog: blog_id,
    }).populate("blog");

    if (!blogContent) {
      return NextResponse.json({
        status: 404,
        message: "Blog not found",
      });
    }

    // Step 2: Increment the 'views' field in BlogDetails
    await BlogDetailModel.findByIdAndUpdate(
      blog_id, // Assuming blog_id is the ID of the BlogDetails document
      { $inc: { views: 1 } }, // Increment views by 1
      { new: true } // Return the updated document (optional)
    );

    // Step 3: Return the blog content data
    return NextResponse.json({
      status: 200,
      message: "Blog loaded!",
      data: blogContent,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
}
