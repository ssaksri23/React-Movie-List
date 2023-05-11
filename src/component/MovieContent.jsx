import React from "react";

export default function MovieContent({ movieInfo }) {
  const { title, release_date, popularity } = movieInfo;
  return (
    <div className="px-2 pt-2">
      <p className="font-bold text-lg text-ellipsis overflow-hidden whitespace-nowrap">
        {title}
      </p>
      <div className="text-sm text-grey flex justify-between pb-5">
        <p>개봉 {release_date}</p>
        <p>{popularity}명</p>
      </div>
    </div>
  );
}
