export default async function editPost(postId, newPost) {
  const response = await fetch(
    `http://localhost:3000/api/posts/${postId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newPost.title,
        text: newPost.text,
      }),
    }
  );

  if (!response.ok) throw new Error("failed to edit the post");
  return await response.json();
}
