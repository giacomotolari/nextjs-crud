"use client";
import getAllPosts from "../../../lib/CRUD/getAllPosts";
import PostContainer from "./PostContainer";

export default async function Posts() {
  const posts = await getAllPosts();
  const reversedPosts = posts.reverse();

  if (posts.length === 0)
    return <h2 className="text-xl font-bold">No posts </h2>;

  return (
    <section className="mt-20">
      {posts.length > 0 &&
        reversedPosts.map((post) => (
          <PostContainer key={post._id} post={post} />
        ))}
    </section>
  );
}
