import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function NavBar() {
  return (
    <div className="flex justify-between items-center h-20 mb-9">
      <Link to={"/"}>
      <div className="h-8">
        <img src="/logo.svg" alt="simply recipes" />
      </div>
      </Link>

      <Link to={'/favourites'} >
        <button className="">
          <FaHeart size={30} />
        </button>
      </Link>
    </div>
  );
}

export default NavBar;
