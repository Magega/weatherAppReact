import { City } from "./CitiesButtons.model";
import { useCallback, useEffect, useState } from "react";
const TopButtonsViewModel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getCities());
  }, []);

  class CityFactory {
    static createCity(id, name) {
      return new City(id, name);
    }
  }

  const getCities = () => {
    return [
      CityFactory.createCity(1, "London"),
      CityFactory.createCity(2, "Sydney"),
      CityFactory.createCity(3, "Tokyo"),
      CityFactory.createCity(4, "Toronto"),
      CityFactory.createCity(5, "Paris"),
    ];
  };

  const sortAsc = useCallback(async () => {
    const sortedData = [...data].sort((a, b) => a.id - b.id);
    setData(sortedData);
  }, [data, setData]);

  const sortDesc = useCallback(async () => {
    const sortedData = [...data].sort((a, b) => b.id - a.id);
    setData(sortedData);
  }, [data, setData]);

  return {
    sortAsc,
    sortDesc,
    getCities,
    data,
    setData,
  };
};
export default TopButtonsViewModel;
