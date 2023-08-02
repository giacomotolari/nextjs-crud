"use client";
import { BsFillTrashFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import deletePost from "../../../lib/CRUD/deletePost";

export default function Trash({ postId }) {
  const router = useRouter();
  const handleDeletePost = async (postId) => {
    await deletePost(postId);
    // refresh the page to show the updated posts list
    router.refresh();
  };

  return (
    <BsFillTrashFill
      className="cursor-pointer"
      onClick={() => handleDeletePost(postId)}
    />
  );
}
