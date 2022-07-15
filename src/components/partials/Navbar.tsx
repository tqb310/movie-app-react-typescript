import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/solid";

const Navbar = () => {
  useEffect(() => {
    const handleShrinkNavbar = () => {
      if (window.scrollY > 199) {
        document.querySelector("div.navbar")?.classList.add("shrink-navbar");
      } else {
        document.querySelector("div.navbar")?.classList.remove("shrink-navbar");
      }
    };
    window.addEventListener("scroll", handleShrinkNavbar);
    return () => {
      window.removeEventListener("scroll", handleShrinkNavbar);
    };
  }, []);
  const handleOpenSearchbar = () => {
    document.querySelector("div.searchbar")?.classList.add("slideDown-end");
  };
  return (
    <div className='w-full fixed z-40 h-24 transition-all duration-300 navbar'>
      <div className='container flex items-center gap-10 h-full'>
        <Link to={"/"}>
          <h1 className='text-red-600 text-4xl font-black'>PHIMMOIFLIX</h1>
        </Link>
        <nav className='flex justify-between items-center grow'>
          <ul className='flex items-center gap-10'>
            <li className='text-white font-semibold text-lg  relative'>
              <NavLink
                to='/'
                className={props =>
                  `hover:link hover:active-link link ${
                    props.isActive ? "active-link" : "non-active-link"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className='text-white font-semibold text-lg relative'>
              <NavLink
                to='/movie'
                className={props =>
                  `hover:link hover:active-link link ${
                    props.isActive ? "active-link" : "non-active-link"
                  }`
                }
              >
                Movies
              </NavLink>
            </li>
            <li className='text-white font-semibold text-lg mr-6 relative'>
              <NavLink
                to='/tv'
                className={props =>
                  `hover:link hover:active-link link ${
                    props.isActive ? "active-link" : "non-active-link"
                  }`
                }
              >
                TV Shows
              </NavLink>
            </li>
          </ul>
          <ul className='flex items-center gap-2'>
            <li className='mr-5'>
              <SearchIcon
                onClick={handleOpenSearchbar}
                className='w-8 h-8 text-white hover:scale-110 duration-200 will-change-transform'
              />
            </li>
            <li className=' '>
              <NavLink to='/sign-up'>
                <button className='bg-red-400 rounded-sm py-2 px-5 min-w-[40px] font-semibold text-sm '>
                  Register
                </button>
              </NavLink>
            </li>
            <li className='text-white'>
              <NavLink to='/sign-in'>
                <button className='min-w-[40px] py-2 px-5 font-semibold text-sm'>
                  Login
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
