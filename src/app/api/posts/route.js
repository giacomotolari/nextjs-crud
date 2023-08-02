import mongoose from "mongoose";
import { NextResponse } from "next/server";
import connectMongoDB from "../../../db/mongo-connect";
import Post from "../../../models/post";

export async function GET() {
  try {
    await connectMongoDB();
    const posts = await Post.find({});
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({
      message: "Server Error",
      status: 500,
    });
  }
}

export async function POST(request) {
  const { title, text } = await request.json();
  let errors = [];

  try {
    await connectMongoDB();
    const existingPost = await Post.findOne({ title });
    if (existingPost) {
      errors.push("Title must be unique.");
      throw new Error("Title must be unique.");
    }
    const newPost = await Post.create({ title, text });
    return NextResponse.json(newPost);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError || errors.length > 0) {
      for (const err in error.errors) {
        errors.push(error.errors[err].message);
      }
      console.log("errors:", errors);
      return NextResponse.json({ msg: errors });
    } else {
      return NextResponse.json({
        msg: ["Server Error"],
        status: 500,
      });
    }
  }
}
