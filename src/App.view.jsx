// import Forecast from "./components/forecast/Forecast";
import AppViewModel from "./App.viewmodel";
import CitiesButtons from "./components/topButtons/CitiesButtons.view";
import Inputs from "./components/inputs/Input";
import TemperatureAndDetails from "./components/temperaturedetail/TemperatureAndDetail";
// import AppViewModel from "./App.viewmodel";
import TimeAndLocation from "./components/timeandlocation/TimeAndLocation.view";
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
    sortAsc,
    sortDesc,
  } = AppViewModel();

  return (
    <div>
      <CitiesButtons
        data={data}
        sortAsc={sortAsc}
        sortDesc={sortDesc}
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
          <TimeAndLocation cityName={cityName} countryDetails={weatherData.countryDetails}/>
          <TemperatureAndDetails mainWeatherInfo={weatherData.mainWeatherInfo} countryDetails={weatherData.countryDetails} weatherDetails={weatherData.weatherDetails}/>
        </div>
      )}
      {/* <TemperatureAndDetails />
      <Forecast title="daily forecast" /> */}
    </div>
  );
}

export default App;
