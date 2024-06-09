//* Importing dependencies...
import React, { useState } from "react";
import axios from "axios";

//* Importing app components...
import CountryModal from "../components/CountryModal";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";

//* Importing components created with styled-components...
import { Container } from "./styles";

interface Country {
  id: number;
  name: string;
  capital: string;
  population: number;
  area: number;
}

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);

    try {
      const response = await axios.get<Country[]>(`https://restcountries.com/v3.1/name/${query}`);
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching countries:', error);
      setCountries([]);
    }
  };

  const handleCountryClick = (country: Country) => {
    setSelectedCountry(country);
  };

  const handleCloseModal = () => {
    setSelectedCountry(null);
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      <ResultsList countries={countries} onItemClick={handleCountryClick} />
      <CountryModal countryInfo={selectedCountry} onClose={handleCloseModal} />
    </Container>
  );
};

export default HomePage;