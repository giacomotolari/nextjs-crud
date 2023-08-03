export default async function getPost(postId) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts/${postId}`,
    {
      method: "GET",
      cache: "no-store", // avoid static data cache because we want to see new posts if added,
    }
  );
  if (!response.ok) throw new Error("failed to fetch the post");

  return await response.json();
}
