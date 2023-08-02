"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import PostForm from "src/components/form/PostForm";
import CanEdit from "src/components/post/CanEdit";
import Post from "src/components/post/Post";
import StopEdit from "./StopEdit";
import formAction from "../../../../lib/formAction";

export default async function UniquePost({ post }) {
  const searchParams = useSearchParams();
  const wantEdit = Boolean(searchParams.get("wantEdit"));
  const [isEditing, setIsEditing] = useState(wantEdit);

  return (
    <div className="p-10">
      <div className="flex justify-end">
        {!isEditing ? (
          <CanEdit setIsEditing={setIsEditing} />
        ) : (
          <StopEdit setIsEditing={setIsEditing} />
        )}
      </div>
      {!isEditing ? (
        <Post post={post} className="p-4 my-4 bg-gray-100 border" />
      ) : (
        <PostForm
          action={formAction.update}
          postToEdit={post}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}
