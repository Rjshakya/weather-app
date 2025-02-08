import React from "react";

const Button = ({ child, primary, secondary, ghost, outline }) => {
  return (
    <>
      {primary && (
        <button className=" bg-orange-600 py-2 px-6 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 ease-in-out hover:drop-shadow-lg hover:shadow-orange-300 capitalize">
          {child}{" "}
        </button>
      )}
      {secondary && (
        <button className=" bg-blue-600 py-2 px-6 rounded-xl flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 ease-in-out hover:drop-shadow-lg hover:shadow-blue-300 capitalize">
          {child}{" "}
        </button>
      )}
      {ghost && (
        <button className="  py-2 px-6 rounded-xl flex items-center justify-center hover:bg-orange-600 transition-colors duration-300 ease-in-out hover:drop-shadow-lg hover:shadow-blue-600 capitalize hover:filter">
          {child}{" "}
        </button>
      )}
      {outline && (
        <button className=" border border-orange-600  py-2 px-6 rounded-xl flex items-center justify-center hover:bg-orange-600 transition-colors duration-300 ease-in-out hover:drop-shadow-lg hover:shadow-blue-600 capitalize hover:filter">
          {child}{" "}
        </button>
      )}
    </>
  );
};

export default Button;
