import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Hero from "./layout/Hero";
import AqiDiv from "./components/AqiDiv";
import HumidityDiv from "./components/HumidityDiv";
import { useGeolocated } from "react-geolocated";
import UseFetch from "./hooks/useFetch";
import { BrowserRouter, Route, Routes } from "react-router";
import Details from "./layout/Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import locationContext from "./context/locationContext";

function App() {
  const queryClient = new QueryClient();
  const [searchHistory, setSearchHistory] = useState([]);
  const clientLocation = () => {
    const { coords } = useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 200,
    });

    return coords;
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <locationContext.Provider
            value={{ clientLocation, searchHistory, setSearchHistory }}
          >
            <div className="bg-white w-full h-full dark:bg-zinc-950  dark:text-white ">
              <Routes >
                <Route  index element={<Hero />}/>
                <Route path="/details" element={<Details />} />
                
              </Routes>
            </div>
          </locationContext.Provider>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
