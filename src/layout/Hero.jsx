import  { React, useContext, useState } from "react";
import HeroDiv from "../components/hero/HeroDiv";
import Header from "../components/header/Header";
import AqiDiv from "../components/AqiDiv";
import HumidityDiv from "../components/HumidityDiv";
import { useQuery } from "@tanstack/react-query";
import { useGeolocated } from "react-geolocated";

import { useSearchParams } from "react-router";

const Hero = () => {
  const [searchParams] = useSearchParams()
  
  const {coords} = useGeolocated({

    positionOptions : {enableHighAccuracy : true} ,
    userDecisionTimeout : 2000
  })


  const BASE_URL = `https://api.weatherapi.com/v1/current.json?key=f82792ec25ba4a1aa31140752241010`
  


  const { data, error, isLoading } = useQuery({
    queryKey: ["currentLocWeather", coords , searchParams.get('q')],
    queryFn: async () => {
      let url = `${BASE_URL}&q=${coords.latitude},${coords.longitude}&aqi=yes`

      if (searchParams.get('q')) {
        url = `${BASE_URL}&q=${searchParams.get('q')}&aqi=yes`
      }

      const res = await fetch(url)
      

      if (res.ok) {
         const data = await res.json()
         return data
      }

      
    },
    
  });

  

  return (
    <div className="main-div-hero  overflow-hidden  grid grid-cols-4">
      <div className="header-main-wrapp relative col-span-full z-10">
        <Header />

        <HeroDiv
          currentLocationWeatherData={data}
          loading={isLoading}
          error={error}
        />

        <div className=" col-span-full md:grid-cols-2 md:grid">
          <AqiDiv data={data} />
          <HumidityDiv data={data} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
