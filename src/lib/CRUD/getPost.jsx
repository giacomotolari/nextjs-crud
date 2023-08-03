import { BACKEND_URL } from "../URL";

export default async function getPost(postId) {
  try {
    const response = await fetch(`${BACKEND_URL}/api/posts/${postId}`, {
      method: "GET",
      cache: "no-store", // avoid static data cache because we want to see new posts if added,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch the post");
    }

    return await response.json();
  } catch (error) {
    // Handle the error here
    console.error("Error fetching the post:", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
}
