"use client";
import { GrClose } from "react-icons/gr";

export default function StopEdit({ setIsEditing }) {
  const handleStopEdit = () => {
    setIsEditing(false);
  };

  return <GrClose className="cursor-pointer" onClick={handleStopEdit} />;
}
