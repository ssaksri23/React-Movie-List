import React from "react";

// 성인 여부에 따른 시청 연령 제한 AgeTag 컴포넌트
export default function AgeTag({ adult }) {
  return (
    <div
      className={`absolute z-10 top-3 right-3 rounded-full w-9 h-9  flex items-center justify-center ${
        adult ? "bg-red" : "bg-green"
      }`}
    >
      {adult ? "청불" : "전체"}
    </div>
  );
}
