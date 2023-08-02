import Link from "next/link";
import Post from "../../../components/post/Post";
import Trash from "./Trash";
import CanEdit from "../../../components/post/CanEdit";

export default function PostContainer({ post }) {
  return (
    <div key={post._id}>
      <div className="flex justify-between">
        <Trash postId={post._id} />
        <Link
          href={{
            pathname: `/posts/${post._id}`,
            // add the query to the url to show instantly the edit-form instead of the post when the page loads
            query: { wantEdit: true },
          }}
        >
          <CanEdit />
        </Link>
      </div>
      <Link href={`/posts/${post._id}`}>
        <Post post={post} className="p-4 my-4 bg-gray-100 border" />
      </Link>
    </div>
  );
}
