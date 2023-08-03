"use client";
import { GrClose } from "react-icons/gr";

export default function StopEdit({ setIsEditing }) {
  const handleStopEdit = () => {
    setIsEditing(false);
  };

  return <GrClose className="cursor-pointer hover:text-teal-950 h-6 w-6" onClick={handleStopEdit} />;
}
