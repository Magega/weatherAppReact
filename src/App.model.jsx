export class WeatherData {
  constructor(id, mainWeatherInfo, countryDetails, weatherDetails) {
    this.id = id;
    this.mainWeatherInfo = mainWeatherInfo;
    this.countryDetails = countryDetails;
    this.weatherDetails = weatherDetails;
  }
}

export class MainWeatherInfo {
  constructor(temp, feels_like, temp_min, temp_max, humidity) {
    this.temp = temp;
    this.feels_like = feels_like;
    this.temp_min = temp_min;
    this.temp_max = temp_max;
    this.humidity = humidity;
  }
}

export class CountryDetails {
  constructor(country, sunrise, sunset, timeZone) {
    this.country = country;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.timeZone = timeZone;
  }
}
export class WeatherDetails {
  constructor(main, icon, description) {
    this.main = main;
    this.icon = icon;
    this.description = description;
  }
}
