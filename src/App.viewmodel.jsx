import { useState, useCallback, useEffect } from "react";
import {
  CountryDetails,
  MainWeatherInfo,
  WeatherData,
  WeatherDetails,
} from "./App.model";
import { normalize } from "./utilities/normalize/Normalize";
import TopButtonsViewModel from "./components/topButtons/CitiesButtons.viewmodel.jsx";
import {fetchData} from "./requests/WeatherDataRequest"
const AppViewModel = () => {
  const { data } = TopButtonsViewModel();
  const [cityName, setCityName] = useState("Ternopil");
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCityWeatherData(cityName);
  }, []);

  // const getCityWeatherData = useCallback(async (cityName) => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=5ab49c4dcd2972fc8e91a329eb9ea564`
  //     );
  //     setLoading(false);

  //     if (response.ok) {
  //       setError(false);
  //       const data = await response.json();
  //       let countryDetails = new CountryDetails(
  //         data.sys.country,
  //         data.sys.sunrise,
  //         data.sys.sunset,
  //         data.timezone
  //       );
  //       let mainWeatherInfo = new MainWeatherInfo(
  //         normalize(data.main.temp),
  //         normalize(data.main.feels_like),
  //         normalize(data.main.temp_min),
  //         normalize(data.main.temp_max)
  //       );
  //       let weatherDetails = new WeatherDetails(
  //         data.weather[0].main,
  //         data.weather[0].icon,
  //         data.weather[0].description
  //       );
  //       let weatherData = new WeatherData(
  //         data.id,
  //         mainWeatherInfo,
  //         countryDetails,
  //         weatherDetails
  //       );
  //       setWeatherData(weatherData);
  //     } else {
  //       console.error("Error fetching weather data");
  //       setError(true);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setError(true);
  //   }
  // }, []);
  const getCityWeatherData = useCallback(async (cityName) => {
    try {
      setLoading(true);
      // const data = await apiClient.fetchData(url);
      const data = await fetchData(cityName)
      setLoading(false);

      let countryDetails = new CountryDetails(
        data.sys.country,
        data.sys.sunrise,
        data.sys.sunset,
        data.timezone
      );
      let mainWeatherInfo = new MainWeatherInfo(
        normalize(data.main.temp),
        normalize(data.main.feels_like),
        normalize(data.main.temp_min),
        normalize(data.main.temp_max)
      );
      let weatherDetails = new WeatherDetails(
        data.weather[0].main,
        data.weather[0].icon,
        data.weather[0].description
      );
      let weatherData = new WeatherData(
        data.id,
        mainWeatherInfo,
        countryDetails,
        weatherDetails
      );
      setWeatherData(weatherData);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  }, []);

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
    searchButton,
    setCityName,
    click,
  };
};
export default AppViewModel;
