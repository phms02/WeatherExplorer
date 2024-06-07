import axios from "axios";

interface Country {
  name: string;
  capital: string;
  population: number;
  area: number;
}

export const searchCountries = async (query: string): Promise<Country[]> => {
  try {
    const response = await axios.get<Country[]>(`https://restcountries.com/v3.1/name/${query}`);
    return response.data;
  } catch(error) {
    console.error("Error fetching countries: ", error);
    return [];
  }
}