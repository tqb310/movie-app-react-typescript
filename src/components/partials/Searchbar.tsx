import React from "react";
import { XIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = React.useState("");

  const handleCloseSearchbar = () => {
    setKeyword("");
    document.querySelector("div.searchbar")?.classList.remove("slideDown-end");
  };
  const handleSearch = () => {
    if (!keyword.trim()) alert("You must enter keyword!");
    else {
      handleCloseSearchbar();
      navigate("/search/" + keyword.trim());
    }
  };
  React.useEffect(() => {
    function enterSearch(e: KeyboardEvent) {
      if (e.key === "Enter") {
        handleSearch();
      }
    }
    inputRef.current?.addEventListener("keyup", enterSearch);
    return () => {
      inputRef.current?.removeEventListener("keyup", enterSearch);
    };
  }, [keyword]);

  return (
    <div
      className='searchbar fixed text-white z-50 top-0 left-0 right-0 bottom-0 -translate-y-full opacity-0 
    duration-300 will-change-transform'
    >
      <div className='fixed w-full h-full bg-black/90'></div>
      <div className='relative text-center py-20 px-5'>
        <XIcon
          onClick={handleCloseSearchbar}
          className='absolute top-5 right-5 h-8 w-8 text-white duration-200 hover:scale-110 will-change-transform'
        />
        <h2 className='text-3xl font-bold pb-4'>
          Unlimited movies, TV <br />
          shows, and more.
        </h2>
        <h6 className='pb-8'>Watch anywhere. Cancel anytime.</h6>
        <div className='w-full max-w-screen-sm mx-auto flex'>
          <input
            ref={inputRef}
            type='text'
            className='outline-none text-black border-none grow px-3 box-border'
            placeholder='Movie, TV show...'
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className='btn btn-primary rounded-none'
          >
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
