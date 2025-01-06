import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./Search/SearchBar";

export default function NavBar() {
  const location = useLocation("");
  const { pathname } = location;

  return (
    <header className="">
      <div className="flex flex-col ">
        <Link to="/" className="text-4xl py-7">
          금빛 영화
        </Link>
        <SearchBar />
      </div>
      <nav className="flex justify-center gap-5 p-5 m-7 text-lg font-bold border-b-2 border-grey1">
        <Link
          to="/boxoffice"
          className={`${
            pathname === "/boxoffice" || pathname === "/" ? "text-red" : ""
          }`}
        >
          박스오피스
        </Link>
        <Link
          to="/nowplaying"
          className={`${pathname === "/nowplaying" ? "text-red" : ""}`}
        >
          현재 상영작
        </Link>
      </nav>
    </header>
  );
}
