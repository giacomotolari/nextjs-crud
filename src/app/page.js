import PostForm from "../components/form/PostForm";
import Posts from "./posts/(components)/Posts";
import formAction from "../lib/formAction";

export default async function Home() {
  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Anonymous posts</h1>
      {/* <PostForm action={formAction.create} />
      <Posts /> */}
    </main>
  );
}
