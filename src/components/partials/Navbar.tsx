import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

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

  return (
    <div className='w-full fixed z-50 h-24 transition-all duration-300 navbar'>
      <div className='container flex justify-between items-center h-full'>
        <Link to={"/"}>
          <h1 className='text-red-600 text-4xl font-black'>PHIMMOIFLIX</h1>
        </Link>
        <nav>
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
            <li>
              <ul className='flex items-center'>
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
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
