import React from "react";
import FooterBg from "../../assets/images/footer-bg.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className={`bg-center bg-cover relative`}
      style={{ background: `url('${FooterBg}')` }}
    >
      <div className='absolute w-full h-full bg-black/75'></div>
      <div className='relative container py-20'>
        <h2 className='text-red-600 text-4xl font-black text-center mb-10'>
          PHIMMOIFLIX
        </h2>
        <div className='text-white flex justify-around'>
          <ul>
            <li className='font-bold py-2 hover:text-red-600 duration-200'>
              <Link to={"/"}>Home</Link>
            </li>
            <li className='font-bold py-2 hover:text-red-600 duration-200'>
              <Link to={"/"}>Contact us</Link>
            </li>
            <li className='font-bold py-2 hover:text-red-600 duration-200'>
              <Link to={"/"}>Term of services</Link>
            </li>
            <li className='font-bold py-2 hover:text-red-600 duration-200'>
              <Link to={"/"}>About us</Link>
            </li>
          </ul>
          <ul>
            <li className='font-bold py-2 hover:text-red-600 duration-200'>
              <Link to={"/"}>Live</Link>
            </li>
            <li className='font-bold py-2 hover:text-red-600 duration-200'>
              <Link to={"/"}>FAQs</Link>
            </li>
            <li className='font-bold py-2 hover:text-red-600 duration-200'>
              <Link to={"/"}>Premium</Link>
            </li>
            <li className='font-bold py-2 hover:text-red-600 duration-200'>
              <Link to={"/"}>Privacy policy</Link>
            </li>
          </ul>
          <ul>
            <li className='font-bold py-2 hover:text-red-600 duration-200'>
              <Link to={"/"}>You must watch</Link>
            </li>
            <li className='font-bold py-2 hover:text-red-600 duration-200'>
              <Link to={"/"}>Recent release</Link>
            </li>
            <li className='font-bold py-2 hover:text-red-600 duration-200'>
              <Link to={"/"}>Top IMDB</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
