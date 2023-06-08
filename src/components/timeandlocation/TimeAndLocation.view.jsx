import React from "react";

function TimeAndLocation({cityName, countryDetails}) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div>
        <p className="text-4xl text-blue-500 font-bold p-3">{cityName} ,<span>{countryDetails.country}</span></p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
