// import Forecast from "./components/forecast/Forecast";
import AppViewModel from "./App.viewmodel";
import CitiesButtons from "./components/topButtons/CitiesButtons.view";
import Inputs from "./components/inputs/Input";
import TemperatureAndDetails from "./components/temperaturedetail/TemperatureAndDetail";
// import AppViewModel from "./App.viewmodel";
import TimeAndLocation from "./components/timeandlocation/TimeAndLocation.view";
import {getTimeWithTimeZone} from "./utilities/normalize/TimeWithTimezone";
function App() {
  const {
    data,
    cityName,
    weatherData,
    loading,
    error,
    click,
    setCityName,
    searchButton,
  } = AppViewModel();
  return (
    <div>
      <CitiesButtons
        data={data}
        click={click}
      />
      <Inputs
        cityName={cityName}
        setCityName={setCityName}
        searchButton={searchButton}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {!loading && !error && weatherData && (
        <div>
          <TimeAndLocation
            cityName={cityName}
            countryDetails={weatherData.countryDetails}
          />
          <TemperatureAndDetails
            mainWeatherInfo={weatherData.mainWeatherInfo}
            countryDetails={weatherData.countryDetails}
            weatherDetails={weatherData.weatherDetails}
            getTimeWithTimeZone= {getTimeWithTimeZone}
          />
        </div>
      )}
    </div>
  );
}

export default App;
