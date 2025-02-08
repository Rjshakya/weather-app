import React from "react";

const HumidityDiv = ({ data }) => {
  const humidity = data && data.current.humidity;

  return (
    <div className="humidity-container my-4 px-2 md:mt-10 col-span-1">
      <div className="wrapper relative overflow-hidden py-8 px-4 flex flex-col gap-4 rounded-3xl  shadow-inner  dark:shadow-blue-800/65 shadow-blue-300 border border-blue-300 dark:border-blue-900">
        <div className="title ">
          <p className=" text-6xl tracking-tighter">{humidity}</p>
        </div>

        <div className="divider w-full h-[1px] mt-10 dark:bg-blue-950 bg-blue-300 "></div>

        <div className="label">
          <p className="font-mono tracking-wide text-2xl">Humditiy</p>
        </div>

        <div className="h-100 w-80 absolute bottom-5  -left-15 bg-blue-900/25 blur-3xl"></div>
      </div>
    </div>
  );
};

export default HumidityDiv;
