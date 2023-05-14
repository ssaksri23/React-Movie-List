import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const [active, setActive] = useState("/boxoffice"); // 현재 활성화된 링크의 경로를 저장하는 상태

  const handleLinkClick = (link) => {
    setActive(link);
  };
  return (
    <header className="">
      <div className="flex flex-col ">
        <Link to="/" className="text-3xl py-7">
          Hyeppy-Movie
        </Link>
        <SearchBar />
      </div>
      <nav className="flex justify-center gap-5 p-5 m-7 text-lg font-bold border-b-2 border-grey1">
        <Link
          to="/boxoffice"
          onClick={() => handleLinkClick("/boxoffice")}
          className={`${active === "/boxoffice" ? "text-red" : ""}`}
        >
          박스오피스
        </Link>
        <Link
          to="/popular"
          onClick={() => handleLinkClick("/popular")}
          className={`${active === "/popular" ? "text-red" : ""}`}
        >
          인기 영화
        </Link>
      </nav>
    </header>
  );
}
