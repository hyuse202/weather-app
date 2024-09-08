import React from "react";
import { cvFtoC } from "@/utils/cvFtoC";
import { cvMiletoKm } from "@/utils/cvMiletoKm";
const Weather = ({ data }) => {
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-black z-10">
      {/* Top */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">{cvFtoC(data.main.temp.toFixed(0))}°C</p>
      </div>
      {/* Bottom */}

      <div className="bg-black/50 relative p-8 rounded-md">
        <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl">
              {cvFtoC(data.main.feels_like ?? 0)}
              °C
            </p>
            <p className="text-xl">Feels Like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">
              {cvMiletoKm(data.wind.speed.toFixed(0))} Km/h
            </p>
            <p className="text-xl">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
