import React, { useContext, useEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdCloseCircle } from "react-icons/io";
import Navbar from "../navbar/Navbar";
import UseOutsideClick from "../../hooks/UseOutsideClick";
import { FaSearch } from "react-icons/fa";
import { useGeolocated } from "react-geolocated";
import UseFetch from "../../hooks/useFetch";
import { useSearchParams } from "react-router";
import locationContext from "../../context/locationContext";
import { useQuery } from "@tanstack/react-query";

const Header = () => {
  const [closeDialog, setCloseDialog] = useState(true);

  const { searchHistory, setSearchHistory } = useContext(locationContext);

  const [inputVal, setInputVal] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["cityLists", inputVal],
    queryFn: async () => {
      let url = `https://api.weatherapi.com/v1/search.json?key=f82792ec25ba4a1aa31140752241010&q=${inputVal}`;
      const res = await fetch(url);

      if (res.ok) {
        const data = await res.json();

        return data;
      }
    },
    enabled: !!inputVal,
  });

  const handleInput = (val) => {
    setInputVal(val);
  };

  const handleInputClicked = () => {
    setCloseDialog(false);
    // fetchWeatherData()
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      console.log(inputVal);

      setSearchParams({ q: inputVal });
      setCloseDialog(true);
      setSearchHistory((prev) => [...prev, inputVal]);
    }
  };

  const handleSearchHistoryDiv = (item) => {
    setSearchParams({ q: item?.name });
    setCloseDialog(true);
  };

  useEffect(() => {
    setSearchParams("");
  }, [inputVal.length < 1]);

  return (
    <div className="py-3 px-2 container-header w-full">
      <div className="wrapper-header flex w-full  items-center gap-4 lg:justify-between">
        <Navbar />

        <div className="user-wrap w-full lg:max-w-2xl lg:pr-4">
          <div className="w-full ">
            <div className=" px-3 py-1 w-full flex items-center gap-2.5  bg-gray-200 dark:bg-zinc-900 rounded-xl    ">
              <div className="search-icon">
                <FaSearch opacity={0.5} className="pt-0.5" />
              </div>

              <input
                value={inputVal}
                onChange={(e) => handleInput(e.target.value)}
                onClick={() => handleInputClicked()}
                onKeyDown={(e) => handleKeyDown(e)}
                type="text"
                placeholder="Search city ..."
                className="w-full outline-none py-2 "
              />
            </div>
          </div>

          {closeDialog || (
            <div className="search-history absolute left-0  w-full   mt-3 px-2 py-3 z-[9999] lg:pr-4">
              <div className="bg-gray-200 dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm lg:max-w-2xl lg:ml-auto   shadow-gray-100 dark:shadow-zinc-800 pt-10 relative">
                <div className="close-btn absolute top-3 right-2 ">
                  <button
                    onClick={() => setCloseDialog(true)}
                    className="text-red-500 cursor-pointer"
                  >
                    <IoMdCloseCircle size={25} />
                  </button>
                </div>

                {data && data.length >= 1 ? (
                  data.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => handleSearchHistoryDiv(item)}
                        className="searh-history-tab cursor-pointer py-4 border-b border-b-zinc-500 dark:border-b-zinc-800  flex items-center justify-between gap-4 px-3"
                      >
                        <span className="font-mono tracking-wide flex gap-2.5 justify-between items-center w-full md:px-4">
                          <span className=" text-[.85rem] md:text-[1rem]">
                            <p>{item?.name}</p>
                          </span>

                          <span className="flex gap-2.5 text-[0.75rem] md:text-sm opacity-55">
                            <p>{item?.region},</p>
                            <p>{item?.country}</p>
                          </span>
                        </span>
                        <span className="">
                          <GoArrowUpRight />
                        </span>
                      </div>
                    );
                  })
                ) : (
                  inputVal.length < 1 ||<div className="searh-history-tab cursor-pointer py-4 border-b border-b-zinc-500 dark:border-b-zinc-800  flex items-center justify-between gap-4 px-3">
                    <span className="font-mono tracking-wide flex gap-2.5 justify-between items-center w-full md:px-4">
                      <span className=" text-[.85rem] md:text-[1rem]">
                        <p>{`Not Found`}</p>
                      </span>

                      {/* <span className="flex gap-2.5 text-[0.75rem] md:text-sm opacity-55">
                      <p>{item?.region},</p>
                      <p>{item?.country}</p>
                    </span> */}
                    </span>
                    {/* <span className="">
                    <GoArrowUpRight />
                  </span> */}
                  </div>
                )}

                {/* {
                  searchHistory.length > 1 && searchHistory.map((item) => {

                    return <div onClick={() => handleSearchHistoryDiv(item)} className="searh-history-tab cursor-pointer py-4 border-b border-b-zinc-500 dark:border-b-zinc-800  flex items-center justify-between px-3">
                    <span className="font-mono tracking-wide ">
                      <p>{item}</p>
                    </span>
                    <span className="">
                      <GoArrowUpRight />
                    </span>
                  </div>
                  })
                } */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
