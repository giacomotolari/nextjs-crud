export default async function Post({ post, className }) {
  return (
    <div className={className}>
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.text}</p>
    </div>
  );
}
