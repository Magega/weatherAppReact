import React from "react";
import AppViewModel from "../../App.viewmodel";

function CitiesButtons({ data, sortAsc, sortDesc, click }) {

  return (
    <div className="flex flex-col justify-start items-center">
      <div className="flex flex-row justify-start items-center">
        <button
          onClick={sortAsc}
          className=" p-3 bg-cyan-400 rounded-lg m-3 cursor-pointer hover:bg-cyan-500"
        >
          Sort Ascending
        </button>
        <button
          onClick={sortDesc}
          className=" p-3 bg-cyan-400 rounded-lg m-3 cursor-pointer hover:bg-cyan-500"
        >
          Sort Descending
        </button>
      </div>
      <ul className=" flex ">
        {data.map(({ id, name }) => (
          <li
            key={id}
            className="p-3 bg-cyan-200 rounded-lg m-3 hover:bg-cyan-300 cursor-pointer"
          >
            <button onClick={() => click(name)}>
              {id}-{name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CitiesButtons;
