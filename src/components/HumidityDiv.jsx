import React from "react";

const HumidityDiv = ({data}) => {

  const humidity  = data && data.current.humidity

  return (
    <div className="humidity-container my-4 px-2 md:mt-10 col-span-1">
      <div className="wrapper bg-blue-400 py-8 px-4 flex flex-col gap-4 rounded-3xl shadow-inner shadow-blue-300 border border-blue-300">
        <div className="title ">
          <p className=" text-6xl tracking-tighter">{humidity}</p>
        </div>

        <div className="divider w-full h-[1px] mt-10 dark:bg-blue-300 bg-blue-300 "></div>

        <div className="label">
          <p className="font-mono tracking-wide text-2xl">Humditiy</p>
        </div>
      </div>
    </div>
  );
};

export default HumidityDiv;
