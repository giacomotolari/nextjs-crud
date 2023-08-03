import { BACKEND_URL } from "../URL";

export default async function getAllPosts() {
  const response = await fetch(`${BACKEND_URL}/api/posts`, {
    method: "GET",
    cache: "no-store", // avoid static data cache because we want to see new posts if added,
  });

  if (!response.ok) throw new Error("failed to fetch the posts");

  return await response.json();
}

