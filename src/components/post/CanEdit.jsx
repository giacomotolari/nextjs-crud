"use client";
import { BsFillPenFill } from "react-icons/bs";

export default function CanEdit({ setIsEditing = undefined }) {
  const handleCanEdit = () => {
    // avoid error if setIsEditing is not defined (beacause it's also used in PostContainer.jsx), where no setIsEditing function is needed
    if (setIsEditing !== undefined) {
      setIsEditing(true);
    }
  };

  return <BsFillPenFill className="cursor-pointer hover:text-blue-500 h-6 w-6" onClick={handleCanEdit} />;
}
