export class WeatherService {
    async getWeatherByCity(city) {
      try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9716ff16d7266e5cbbc7542f1b2442a2`);
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
      } catch(error) {
        console.error("There was an error handling your request: " + error.message);
      }
    }
  }