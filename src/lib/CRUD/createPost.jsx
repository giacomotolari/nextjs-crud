export default async function createPost(newPost) {
  try {
    const response = await fetch(`api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newPost.title,
        text: newPost.text,
      }),
    });
    if (!response.ok) throw new Error("failed to edit the post");
    return await response.json();
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}
