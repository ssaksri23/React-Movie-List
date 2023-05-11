import React from "react";

export default function AgeTag({ adult }) {
  return (
    <div
      className={`absolute top-3 right-3  rounded-full w-9 h-9  flex items-center justify-center ${
        adult ? "bg-red" : "bg-green"
      }`}
    >
      {adult ? "청불" : "전체"}
    </div>
  );
}
