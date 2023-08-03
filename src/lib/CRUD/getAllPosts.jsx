import { BACKEND_URL } from "../URL";

export default async function getAllPosts() {
  try {
    const response = await fetch(`${BACKEND_URL}/api/posts`, {
      method: "GET",
      cache: "no-store", // avoid static data cache because we want to see new posts if added,
    });
    console.log("🚀 ~ file: getAllPosts.jsx:7 ~ getAllPosts ~ response:", response)

    if (!response.ok) {
      throw new Error("Failed to fetch the posts");
    }


    return await response.json();
  } catch (error) {
    // Handle the error here
    console.error("Error fetching posts:", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
}

