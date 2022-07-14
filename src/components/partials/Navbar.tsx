import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='w-full py-8 fixed z-20'>
      <div className='container flex justify-between items-center '>
        <h1 className='text-red-600 text-4xl font-black'>PHIMMOIFLIX</h1>
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
                to='/tvshow'
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
