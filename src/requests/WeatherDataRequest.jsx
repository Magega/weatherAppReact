class ApiClient {
  async fetchData(cityName) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=5ab49c4dcd2972fc8e91a329eb9ea564`
    );
    const data = await response.json();
    return data;
  }
}
export const { fetchData } = new ApiClient();
