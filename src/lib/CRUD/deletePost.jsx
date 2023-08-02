export default async function deletePost(postId) {
  try {
    const response = await fetch(`api/posts/${postId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("failed to delete the post");
    }

    return await response.json();
  } catch (error) {
    console.log("handleDeletePost ~ error", error);
    throw error;
  }
}
