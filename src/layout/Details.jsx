import React, { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import { useGeolocated } from "react-geolocated";

import { useNavigate, useSearchParams } from "react-router";
import DetailsMainDiv from "../Pages/DetailsPage/DetailsMainDiv";
import { IoIosArrowRoundBack } from "react-icons/io";

const Details = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchParams.get("q")) {
      navigate("/");
    } else {
      navigate(`/details?q=${searchParams.get("q")}`);
    }
  }, [searchParams]);

  const { coords } = useGeolocated({
    positionOptions: { enableHighAccuracy: true },
    userDecisionTimeout: 2000,
  });

  const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=f82792ec25ba4a1aa31140752241010`;

  const { data, error, isLoading } = useQuery({
    queryKey: ["currentLocWeather", coords, searchParams.get("q")],
    queryFn: async () => {
      let url = `${BASE_URL}&q=${coords.latitude},${coords.longitude}&aqi=yes`;

      if (searchParams.get("q")) {
        url = `${BASE_URL}&q=${searchParams.get("q")}&days=5&aqi=yes`;
      }

      const res = await fetch(url);

      if (res.ok) {
        const data = await res.json();
        return data;
      }
    },
    // enabled : coords?true:false || searchParams.get('q')?true:false
  });

  const handleBackBtn = () => {
    navigate("/", searchParams.set("q", searchParams.get("q")));
  };

  return (
    <div className="main-div-hero  overflow-hidden  grid grid-cols-4">
      <div className="header-main-wrapp relative col-span-full z-10">
        {/* <Header /> */}

        <div className="back-btn px-4 pt-4">
          <button
            onClick={handleBackBtn}
            className="grid place-content-center dark:bg-zinc-800 bg-zinc-300 rounded-xl active:scale-90 hover:bg-zinc-200 dark:hover:bg-zinc-800/55"
          >
            <IoIosArrowRoundBack size={38} />
          </button>
        </div>

        <DetailsMainDiv
          currentLocationWeatherData={data}
          loading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
};

export default Details;
