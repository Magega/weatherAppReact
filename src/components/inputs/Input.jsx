import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
function Input({cityName, setCityName, searchButton}) {
  return (
    <div className=" flex flex-row justify-center align-center my-6 w-full">
      <div className="w-6/12 flex">
        <input
          type="text"
          placeholder="Search city..."
          // value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase bg-blue-500 placeholder-white rounded-lg"
        />
        <button onClick={() => searchButton(cityName)}>
          <UilSearch
            size={40}
            className="text-blue-500 cursor-pointer transition ease-out hover:scale-125 "
          />
        <p>Search</p>
        </button>
      </div>
    </div>
  );
}

export default Input;
