//* Dependencies imports...
import axios from "axios";

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = process.env.BASE_URL;

const getWeatherByCountryCode = async (countryCode: string): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${countryCode}&appid=${API_KEY}`);

    return response.data;
  } catch(err) {
    throw new Error("Error fetching weather data.");
  }
};

export default { getWeatherByCountryCode };