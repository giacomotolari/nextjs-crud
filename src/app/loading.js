import getAllPosts from "../lib/CRUD/getAllPosts";

export default async function Loading() {
  const posts = await getAllPosts();
  return (
    <div className="p-8 max-w-3xl mx-auto skeleton-container">
      <button className="ml-4 pl-1 pr-1 rounded-lg h-6 w-6 border skeleton-loading"></button>
      <div className="p-10">
        <div className="flex justify-end">
          <div className="p-2 my-4 skeleton-loading"></div>
        </div>
        <div className="p-4 my-4 skeleton-loading"></div>
        <br />
        <div className="p-10 my-4 skeleton-loading"></div>
        <br />
        <div className="p-6 my-4 skeleton-loading"></div>
      </div>
      <br />
      <br />
      {posts.length > 0 &&
        posts.map((post) => (
          <div key={post.id}>
            <div className="flex justify-between">
              <div className="p-2 my-4 skeleton-loading"></div>
              <div className="p-2 my-4 skeleton-loading"></div>
            </div>
            <br />
            <div className="p-8 my-4 skeleton-loading"></div>
          </div>
        ))}
    </div>
  );
}
