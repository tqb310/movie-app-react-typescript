import React from "react";
import { XIcon } from "@heroicons/react/solid";

const Searchbar = () => {
  const handleCloseSearchbar = () => {
    document.querySelector("div.searchbar")?.classList.remove("slideDown-end");
  };
  return (
    <div
      className='searchbar fixed text-white z-50 top-0 left-0 right-0 bottom-0 -translate-y-full opacity-0 
    duration-300 will-change-transform'
    >
      <div className='fixed w-full h-full bg-black/80'></div>
      <XIcon
        onClick={handleCloseSearchbar}
        className='absolute top-5 right-5 h-8 w-8 text-white duration-200 hover:scale-110 will-change-transform'
      />
      <div className='relative container text-center py-20'>
        <h2 className='text-3xl font-bold pb-4'>
          Unlimited movies, TV <br />
          shows, and more.
        </h2>
        <h6 className='pb-8'>Watch anywhere. Cancel anytime.</h6>
        <div className='w-[500px] mx-auto flex'>
          <input
            type='text'
            className='outline-none text-black border-none grow px-3 box-border'
            placeholder='Movie, TV show...'
          />
          <button className='btn btn-primary rounded-none'>SEARCH</button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
