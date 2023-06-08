import { useState, useCallback, useEffect } from "react";
import {
  City,
  CountryDetails,
  MainWeatherInfo,
  WeatherData,
  WeatherDetails,
} from "./App.model";

const AppViewModel = () => {
  const [cityName, setCityName] = useState("Ternopil");
  const [weatherData, setWeatherData] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCityWeatherData(cityName);
    setData(getCities());
  }, []);

  // useEffect(() => {
  //   console.log(weatherData);
  // }, [weatherData]);

  const getCities = () => {
    return [
      new City(1, "London"),
      new City(2, "Sydney"),
      new City(3, "Tokyo"),
      new City(4, "Toronto"),
      new City(5, "Paris"),
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

  const getCityWeatherData = useCallback(async (cityName) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=5ab49c4dcd2972fc8e91a329eb9ea564`
      );
      setLoading(false);

      if (response.ok) {
        setError(false);
        const data = await response.json();        
        let countryDetails = new CountryDetails(
          data.sys.country,
          data.sys.sunrise,
          data.sys.sunset
        );
        let mainWeatherInfo = new MainWeatherInfo(
          normalize(data.main.temp),
          normalize(data.main.feels_like),
          normalize(data.main.temp_min),
          normalize(data.main.temp_max),
          data.main.humidity
        );
        let weatherDetails = new WeatherDetails(
          data.weather[0].main,
          data.weather[0].icon,
          data.weather[0].description,
        );
        let weatherData = new WeatherData(
          data.id,
          mainWeatherInfo,
          countryDetails,
          weatherDetails,
        );
        setWeatherData(weatherData);
      } else {
        console.error("Error fetching weather data");
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }, []);
  const normalize = (badData) => {
    const goodData = ((badData - 32) * 5) / 9;
    return Math.round(goodData);
  };

  const click = useCallback(
    async (city) => {
      await setCityName(city);
      await getCityWeatherData(city);
    },
    [setCityName, getCityWeatherData]
  );

  const searchButton = useCallback(
    async (cityName) => {
      await getCityWeatherData(cityName);
    },
    [getCityWeatherData]
  );

  return {
    error,
    loading,
    cityName,
    weatherData,
    data,
    sortAsc,
    sortDesc,
    searchButton,
    setCityName,
    click,
  };
};
export default AppViewModel;
