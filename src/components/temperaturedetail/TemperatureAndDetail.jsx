import React from "react";
import {
  UilArrowUp,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetail({mainWeatherInfo, countryDetails, weatherDetails}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-blue-500 font-medium">{weatherDetails.main}</h1>
      <h1 className="text-blue-300 font-light">{weatherDetails.description}</h1>
        <div className="flex items-center justify-center my-3">
          <img
            src = {`http://openweathermap.org/img/wn/${weatherDetails.icon}@2x.png`}
            alt=""
            className="h-20 pr-20"
          />
          <p className="text-2xl text-blue-900 font-bold leading-none pr-20">
            {mainWeatherInfo.temp}
          </p>
          <div className="flex flex-col">
            <div className="flex font-light text-sm items-center justify-center">
              <UilTemperature size={18} className="mr-1" />
              Real fell: <span className="font-medium ml-1">{mainWeatherInfo.feels_like}</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
              <UilTear size={18} className="mr-1" />
              Humidity: <span className="font-medium ml-1"> {mainWeatherInfo.humidity}</span>
            </div>
          </div>
        </div>
        <div className="flex mt-5">
          <div className="flex font-light text-sm items-center justify-center mx-2">
            <UilSun size={18} className="mr-1" />
            Rise: <span className="font-medium ml-1">{countryDetails.sunrise}</span>
          </div>
          <p className="text-xl text-blue-500 mx-1 cursor-default">|</p>

          <div className="flex font-light text-sm items-center justify-center mx-2">
            <UilSunset size={18} className="mr-1" />
            Set: <span className="font-medium ml-1">{countryDetails.sunset}</span>
          </div>
          <p className="text-xl text-blue-500 mx-1 cursor-default">|</p>

          <div className="flex font-light text-sm items-center justify-center mx-2">
            <UilArrowUp size={18} className="mr-1" />
            Hight: <span className="font-medium ml-1">{mainWeatherInfo.temp_max}</span>
          </div>
          <p className="text-xl text-blue-500 mx-1 cursor-default">|</p>

          <div className="flex font-light text-sm items-center justify-center mx-2">
            <UilArrowUp size={18} className="mr-1 rotate-180" />
            Low: <span className="font-medium ml-1">{mainWeatherInfo.temp_min}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureAndDetail;
