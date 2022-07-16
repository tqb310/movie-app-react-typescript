import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { SearchIcon, MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [isOpenMenu, setOpenMenu] = useState(true);

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
  const handleToggleMenu = () => {
    setOpenMenu(!isOpenMenu);
  };

  return (
    <div className='w-full fixed z-40 h-24 transition-all duration-300 navbar'>
      <div className='container flex justify-between items-center gap-10 h-full'>
        <Link to={"/"}>
          <h1 className='text-red-600 text-2xl xl:text-4xl font-black'>
            PHIMMOIFLIX
          </h1>
        </Link>
        <nav className='flex items-center grow justify-end lg:justify-between'>
          {/* MOBILE & TABLE MENU */}
          <ul
            className={`-translate-y-full opacity-0 duration-300 will-change-transform ${
              isOpenMenu ? "slideDown-end" : ""
            } fixed top-0 left-0 right-0 bottom-0 bg-black/90 flex justify-center flex-col text-center gap-10 z-50 px-20`}
          >
            <li className='text-white font-semibold text-lg relative'>
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
            <li className='text-white font-semibold text-lg relative'>
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
          {/* LARGE SCREEN MENU */}
          <ul className='hidden lg:flex items-center justify-center text-center gap-10'>
            <li className='text-white font-semibold text-lg relative'>
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
            <li className='text-white font-semibold text-lg relative'>
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
            <li className='mr-5 z-[100] lg:hidden'>
              {isOpenMenu ? (
                <XIcon
                  onClick={handleToggleMenu}
                  className='w-8 h-8 text-white hover:scale-110 duration-200 will-change-transform'
                />
              ) : (
                <MenuIcon
                  onClick={handleToggleMenu}
                  className='w-8 h-8 text-white hover:scale-110 duration-200 will-change-transform'
                />
              )}
            </li>
            <li
              className='fixed left-0 bottom-5 right-0 lg:static flex justify-center lg:justify-start 
            bg-black/60 lg:bg-transparent p-5 lg:p-0'
            >
              <div className='grow lg:grow-0'>
                <NavLink to='/sign-up' className='w-full'>
                  <button className='bg-red-400 rounded-sm py-2 px-5 min-w-[40px] font-semibold text-sm w-full'>
                    Register
                  </button>
                </NavLink>
              </div>
              <div className='text-white grow lg:grow-0'>
                <NavLink to='/sign-in' className='w-full'>
                  <button className='min-w-[40px] py-2 px-5 font-semibold text-sm w-full'>
                    Login
                  </button>
                </NavLink>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
