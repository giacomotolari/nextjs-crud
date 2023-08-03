export default async function getAllPosts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts`,
    {
      method: "GET",
      cache: "no-store", // avoid static data cache because we want to see new posts if added,
    }
  );

  if (!response.ok) throw new Error("failed to fetch the posts");

  return await response.json();
}
