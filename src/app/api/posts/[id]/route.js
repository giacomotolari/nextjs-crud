import { NextResponse } from "next/server";
import connectMongoDB from "../../../../db/mongo-connect";
import Post from "../../../../models/post";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    await connectMongoDB();
    const post = await Post.findById(id);
    if (!post) {
      return NextResponse.json({
        message: "Post not found",
        status: 404,
      });
    }
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({
      message: "Server Error",
      status: 500,
    });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  if (!id) {
    return NextResponse.json("Missing id");
  }
  try {
    await connectMongoDB();
    const post = await Post.findById(id);
    if (!post) {
      return NextResponse.json({
        message: "Post not found",
        status: 404,
      });
    }
    await Post.findByIdAndDelete(id);

    return NextResponse.json({ message: `Post ${id} deleted` });
  } catch (error) {
    return NextResponse.json({
      message: "Server Error",
      status: 500,
    });
  }
}

export async function PATCH(request, { params }) {
  const { id } = params;
  const { title, text } = await request.json();
  if (!id) {
    return NextResponse.json({
      message: "Missing id",
      status: 400,
    });
  }
  try {
    await connectMongoDB();
    const post = await Post.findById(id);
    if (!post) {
      return NextResponse.json({
        message: "Post not found",
        status: 404,
      });
    }
    // Apply the changes to the fetched post
    post.title = title || post.title;
    post.text = text || post.text;

    // Save the updated post back to the database
    await post.save();

    return NextResponse.json({
      message: `Post ${id} updated`,
      updatedPost: post,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Server Error",
      status: 500,
    });
  }
}
