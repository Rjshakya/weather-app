import React, { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { data, Link } from "react-router";
import DetailsForecastTIme from "../../components/DetailsForecastTIme";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BeatLoader } from "react-spinners";

const DetailsMainDiv = ({ currentLocationWeatherData, loading, error }) => {
  const date = new Date();
  const getcurrentHour = date.getHours();

  const currentTemp = currentLocationWeatherData?.current?.temp_c;
  const location = currentLocationWeatherData?.location?.name;
  const conditionText = currentLocationWeatherData?.current?.condition?.text;
  const forcastData = currentLocationWeatherData?.forecast?.forecastday;

  const currentDayForecast = forcastData && forcastData[0];

  const HourForeCastArr =
    currentDayForecast &&
    currentDayForecast.hour.filter((item) => {
      return item.time.slice(11, 13) >= getcurrentHour;
    });

  useEffect(() => {
    console.log(forcastData);
  }, [forcastData]);

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

  const chartData = forcastData && forcastData;

  return (
    <div className="details-container px-3 object-cover mb-10 ">
      {/* <div className=" absolute top-0 left-0 right-0 bottom-0 z-[-1] ">
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
      </div> */}

      <div className="hero-wrapper py-4 mt-4 flex flex-col md:border md:rounded-2xl md:px-6 md:border-zinc-300 md:dark:border-zinc-700 ">
        <div className="location ">
          <div className=" font-mono flex items-center dark:bg-zinc-900  bg-zinc-200 w-fit py-2 px-3 rounded-xl gap-2">
            <span>
              <FaLocationDot />
            </span>
            <span>{location ? location : ""}</span>
          </div>
        </div>

        <div className="main-content md:text-black md:dark:text-white">
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

            <div className="flex justify-between items-center">
              <div className="sub-heading ">
                <span className="">
                  <span className=" flex items-center gap-2">
                    <IoMdSunny size={20} />
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

            <div className="divider w-full h-[1px] mt-5 mb-10 dark:bg-zinc-700 bg-zinc-300"></div>

            <div className="forcast-wrapper w-full overflow-hidden overflow-x-auto">
              <h3 className="px-1 pt-2 pb-12 text-5xl tracking-tighter">
                Hourly Forcast
              </h3>
              <div className="forcast-main w-full inline-flex gap-4 pb-4">
                {loading && <BeatLoader color="#fff" />}

                {HourForeCastArr &&
                  HourForeCastArr.length &&
                  HourForeCastArr.map((item) => {
                    return (
                      <div
                        key={item.time_epoch}
                        className="forcast-card-wrapper max-w-[22rem] w-full flex-none"
                      >
                        <div className="forcast-card-main  px-4  pb-5 pt-2 border dark:border-zinc-600/65 border-zinc-300 rounded-3xl md:dark:bg-zinc-900">
                          <div className="body mb-15 mt-4 text-center ">
                            <div className="tem flex gap-1 ">
                              <span className="text-7xl font-medium tracking-tighter ">
                                {item.temp_c}
                              </span>
                              <span className="flex  pt-2">
                                {currentTemp && (
                                  <p className="md:text-xl">&deg;</p>
                                )}
                                {currentTemp && (
                                  <p className=" md:text-2xl  font-medium">C</p>
                                )}
                              </span>
                            </div>
                          </div>
                          <div className="footer-wrap flex items-center w-full justify-between dark:text-zinc-400">
                            <span className=" flex items-center gap-2">
                            {item ? <img src={item.condition?.icon} alt={item.condition?.text} className=" w-12 h-12" /> : ""}
                              <p className=" tracking-tighter font-mono font-medium text-lg">
                                {item ? item.condition?.text : ""}
                              </p>
                            </span>
                            <div className="time text-xl">
                              <span className="time tracking-tighter font-mono font-medium text-xl">
                                {<DetailsForecastTIme time={item.time} />}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="divider w-full h-[1px] mt-10 mb-10 dark:bg-zinc-700 bg-zinc-300"></div>

            <h3 className="px-4 pt-2 pb-12 text-5xl tracking-tighter">
              Daily Forcast
            </h3>

            <div className="chart-wrapper  py-4 px-4  grid md:grid-cols-2 grid-cols-1">
              <div className="chart-main w-full md:h-[70vh] h-[50vh] pr-8 py-5 border rounded-3xl dark:border-zinc-600 dark:bg-zinc-900">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <Line
                      type={"monotone"}
                      dataKey={"day.avgtemp_c"}
                      stroke="#f3841b"
                      activeDot={{ r: 2 }}
                    />
                    {/* <CartesianGrid stroke="#27272a" strokeDasharray={"5 5"} /> */}
                    <XAxis dataKey="date" stroke="#464444" />
                    <YAxis stroke="#464444" />
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsMainDiv;
