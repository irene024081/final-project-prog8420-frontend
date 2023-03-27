import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch, FaHeart } from 'react-icons/fa';
import { CgUser } from 'react-icons/cg';

function NavBar() {
  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container  mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
          {/* logo */}
          <div className="col-span-1 lg:block ">
            <Link to="/">
              <img
                src="/images/WatchMate.png"
                alt="logo"
                className="w-full h-12 object-contain"
              />
            </Link>
          </div>

          {/* search form */}

          <div className="col-span-3">
            <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
              <button
                type="submit"
                className="bg-submain w-20 flex-colo h-12 rounded text-white"
              >
                search
              </button>
              <input
                type="text"
                placeholder="Search Movie Name"
                className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none focus:outline-none px-2 text-black"
              />
            </form>
          </div>
          <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/about-us">About Us</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>
            <NavLink to="/login">
              <CgUser className="w-8 h-8" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
