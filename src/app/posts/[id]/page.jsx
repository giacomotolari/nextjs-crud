import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import getPost from "../../../lib/CRUD/getPost";
import PostPageBody from "./(components)/PostPageBody";

export async function generateMetadata({ params }) {
  // const post = await getPost(params.id);
  const post = { title: "title" };

  return {
    title: `Post ${post.title}`,
  };
}

export default async function PostPage({ params }) {
  // const post = await getPost(params.id);
  const post = { title: "title", text: "text"};

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <Link href="/">
        <button className="border-black border pl-1 pr-1 bg-blue-200 rounded-lg">
          <BiArrowBack className="h-6 w-6 " />
        </button>
      </Link>
      <h1 className="mt-10 font-bold text-center">The post: {post.title}</h1>
      {/* <PostPageBody post={post} /> */}
    </main>
  );
}
