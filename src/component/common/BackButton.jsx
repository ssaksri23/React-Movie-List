import React from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="text-xl flex gap-1 items-center"
    >
      <BiArrowBack />
      뒤로가기
    </button>
  );
}
