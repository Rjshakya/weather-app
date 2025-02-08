import React, { useState } from "react";
import Button from "../Button";
import { FiHome } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isClosed, setIsClosed] = useState(true);

  const handleNavOpen = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div className="container-nav dark:text-white text-black">
      <div className="open-btn  ">
        <button
          onClick={handleNavOpen}
          className="grid place-content-center bg-orange-600 rounded-lg p-1 transition-all duration-300 ease-in-out hover:bg-orange-500 active:scale-90 "
        >
          <IoMenu size={33} />
        </button>
      </div>

      <div
        className={`wrapper flex flex-col max-w-sm w-full fixed top-0 left-0 h-full bg-gray-100 dark:bg-zinc-900 ${
          isClosed && "-translate-x-96"
        }  transition-all duration-300 ease-in-out z-[9999999]`}
      >
        
        <div className="logo-wrapper  flex items-center justify-between pr-4  pt-5 pb-3 pl-5">
          
          <p className="tracking-tighter text-3xl ">Weather</p>
          <button
            onClick={handleNavOpen}
            className="grid place-content-center bg-orange-600 rounded-xl active:scale-90 hover:bg-orange-500"
          >
            <IoIosArrowRoundBack size={38} />
          </button>
        </div>

        <div className="h-[1px] w-full dark:bg-slate-50/5 "></div>

        <div className="navlink-btn-wrapper h-full flex flex-col items-start mt-10">
          <button className="py-2 px-6 hover:text-orange-400 transition-colors duration-300 ease-in-out flex items-center justify-center gap-2">
            <Link
              to={{ pathname: "/" }}
              className="flex items-center justify-center gap-2"
            >
              <span>
                <FiHome />
              </span>
              <p className=" text-lg tracking-wide font-medium font-mono">
                Home
              </p>
            </Link>
          </button>

          
        </div>
      </div>

      {
        isClosed || <div  className="w-full h-full bg-zinc-800/45 fixed top-0 left-0 right-0 md:hidden"></div>
      }
      
    </div>
  );
};

export default Navbar;
