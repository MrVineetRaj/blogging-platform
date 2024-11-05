import BlogContainer from "@/components/blog-container";
import dbConnect from "@/lib/database/db-connection";
import BlogContentModel from "@/lib/database/models/blog-content";
import BlogDetailModel from "@/lib/database/models/blog-details";
import { NextResponse } from "next/server";

// create new blog post
export async function POST(req) {
  const body = await req.json();

  try {
    await dbConnect();
    const { title, sub_title, content, tag } = body;

    console.log("here i o");
    if (!title || !sub_title || !content || !tag) {
      return NextResponse.json({
        status: 400,
        message: "Fill all required fields",
      });
    }

    const new_blog_detail = new BlogDetailModel({
      title,
      sub_title,
      tag,
    });

    await new_blog_detail.save();

    const new_blog_content = new BlogContentModel({
      blog: new_blog_detail._id,
      content,
    });

    await new_blog_content.save();

    return NextResponse.json({
      status: 201,
      data: {
        _id: new_blog_content.blog,
      },
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
}

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const sorting_option = searchParams.get("sorting_option") || "";

  const search_query = searchParams.get("search_query") || "";

  try {
    await dbConnect();
    let sortingOption = {};

    if (sorting_option === "most-recent") {
      sortingOption = {
        ...sortingOption,
        _id: -1,
      };
    }

    if (sorting_option === "most-read") {
      sortingOption = {
        ...sortingOption,
        views: -1,
      };
    }

    let query_obj = {};

    if (search_query) {
      console.log(search_query);
      query_obj = {
        ...query_obj,
        $or: [
          { title: { $regex: search_query, $options: "i" } }, // Search in 'title'
          { sub_title: { $regex: search_query, $options: "i" } }, // Or in 'sub_title'
        ],
      };
    }

    console.log(query_obj);
    const blogs = await BlogDetailModel.find(query_obj).sort(sortingOption);

    console.log(blogs);
    return NextResponse.json({
      status: 200,
      message: "Blogs loaded!",
      data: blogs,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Something Wrong!",
    });
  }
}
