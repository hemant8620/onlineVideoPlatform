import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  HAMBURGER_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsondata = await data.json();
    setSuggestions(jsondata[1]);
    dispatch(
      cacheResults({
        [searchQuery]: jsondata[1],
      })
    );
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src={HAMBURGER_ICON}
        />
        <a href="/">
          <img
            className="h-8 mx-2 cursor-pointer"
            alt="logo"
            src={YOUTUBE_LOGO}
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 px-4 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
        {showSuggestions && suggestions.length > 0 && (
          <div className="z-30 absolute bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((x) => (
                <li key={x} className="py-2 px shadow-sm hover:bg-gray-100">
                  🔍 {x}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img className="h-8" src={USER_ICON} alt="user" />
      </div>
    </div>
  );
};

export default Head;
