import React, { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { useGeolocated } from "react-geolocated";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { BeatLoader } from 'react-spinners'

const HeroDiv = ({ currentLocationWeatherData, loading, error }) => {

  const navigate  = useNavigate()
  const date = new Date();

  const currentTemp = currentLocationWeatherData?.current?.temp_c;
  const location = currentLocationWeatherData?.location?.name;
  const conditionText = currentLocationWeatherData?.current?.condition?.text;
  const conditionIcon = currentLocationWeatherData?.current?.condition?.icon;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const getCurrentDate = date.getDate();
  const getCurrentMonth = date.getMonth();

  const handleNavigate  = (e) => {
      e.preventDefault()
      navigate(`/details?q=${location}`)
  }
  

  return (
    <div className="hero-container px-3 object-cover m ">
      <div className=" absolute top-0 left-0 right-0 bottom-0 z-[-1] ">
        <svg
          className=" h-full md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 700 700"
        >
          <defs>
            <linearGradient
              gradientTransform="rotate(-324, 0.5, 0.5)"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="gggrain-gradient2"
            >
              <stop
                stopColor="hsla(39, 100%, 50%, 1.00)"
                stopOpacity="1"
                // stop-color=""
                // stop-opacity=""
                offset="-0%"
              ></stop>
              <stop
                stopColor="rgba(255,255,255,0)"
                stopOpacity="0"
                offset="100%"
              ></stop>
            </linearGradient>
            <linearGradient
              gradientTransform="rotate(324, 0.5, 0.5)"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="gggrain-gradient3"
            >
              <stop stopColor="hsl(227, 57%, 71%)" stopOpacity="1"></stop>
              <stop
                stopColor="rgba(255,255,255,0)"
                stopOpacity="0"
                offset="100%"
              ></stop>
            </linearGradient>
            <filter
              id="gggrain-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.4"
                numOctaves="2"
                seed="2"
                stitchTiles="stitch"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="turbulence"
              ></feTurbulence>
              <feColorMatrix
                type="saturate"
                values="0"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="turbulence"
                result="colormatrix"
              ></feColorMatrix>
              <feComponentTransfer
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="colormatrix"
                result="componentTransfer"
              >
                <feFuncR type="linear" slope="3"></feFuncR>
                <feFuncG type="linear" slope="3"></feFuncG>
                <feFuncB type="linear" slope="3"></feFuncB>
              </feComponentTransfer>
              <feColorMatrix
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="componentTransfer"
                result="colormatrix2"
                type="matrix"
                values="1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 19 -11"
              ></feColorMatrix>
            </filter>
          </defs>
          <g>
            <rect width="100%" height="100%" fill="hsl(0, 0%, 100%)"></rect>
            <rect
              width="100%"
              height="100%"
              fill="url(#gggrain-gradient3)"
            ></rect>
            <rect
              width="100%"
              height="100%"
              fill="url(#gggrain-gradient2)"
            ></rect>
            <rect
              width="100%"
              height="100%"
              fill="transparent"
              filter="url(#gggrain-filter)"
              opacity="0.42"
              style={{ mixBlendMode: "soft-light" }}
            ></rect>
          </g>
        </svg>
      </div>

      <div className="hero-wrapper py-4 mt-4 flex flex-col md:border md:rounded-2xl md:px-6 md:border-zinc-700 ">
        <div className="location ">
          <div className=" font-mono flex items-center dark:bg-zinc-900  bg-zinc-200 w-fit py-2 px-3 rounded-xl gap-2">
            <span>
              <FaLocationDot />
            </span>
            <span>{location ? location : ""}</span>
          </div>
        </div>

        <div className="main-content text-black md:text-black md:dark:text-white">
          <div>
          
            {error && "error occured"}
            <div className="heading  w-full relative flex justify-center ">
              <div className="flex justify-start items-center gap-2">
                <h1 className="md:text-[15rem] text-[10rem] tracking-tighter flex font-medium ">
                  {loading && <BeatLoader color="#fff" />}
                  
                  {currentTemp && currentTemp}
                </h1>
                <span className="flex pb-16">
                  {currentTemp && (
                    <p className="md:text-5xl text-3xl inline -mr-2 ">&deg;</p>
                  )}
                  {currentTemp && (
                    <p className=" md:text-8xl text-6xl font-medium">C</p>
                  )}
                </span>
              </div>
            </div>

            <div className="divider w-full h-[1px] mt-5 mb-5 dark:bg-zinc-700 bg-zinc-300"></div>

            <div className="condition-and-date-wrapper flex justify-between items-center">
              <div className="sub-heading ">
                <span className="">
                  <span className=" flex items-center gap-2">
                    {loading && <BeatLoader color="#fff" />}
                    {conditionIcon&&<img src={conditionIcon} alt={conditionText} className="w-10 h-10 aspect-square" />}
                     
                    <p className=" tracking-tighter font-medium text-xl">
                      {conditionText ? conditionText : ""}
                    </p>
                  </span>
                </span>
              </div>

              <div className="date ">
                <span>
                  <p className="font-mono">{`Today ${getCurrentDate} , ${months[getCurrentMonth]}`}</p>
                </span>
              </div>
            </div>

            <div className="date mt-6 md:hidden">
              <span>
                <p className="font-mono">Today , 29 Jan</p>
              </span>
            </div>

            <div className="divider w-full h-[1px] mt-5 dark:bg-zinc-700 bg-zinc-300"></div>

            <div  className="link-wrapper mt-6 mb-5 ">
             <div onClick={(e) => handleNavigate(e)}  className="flex justify-between cursor-pointer">
                <div>
                  <p className=" font-mono">Hourly Forcast</p>
                </div>

                <div>
                  <GoArrowUpRight size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDiv;
