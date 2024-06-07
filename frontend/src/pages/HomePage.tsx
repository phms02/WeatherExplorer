import React, { useState } from 'react';
import axios from 'axios'; // Importe o axios para fazer a requisição HTTP
import { Container } from "@mondaydotcom/monday-sdk-react";
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import CountryModal from '../components/Modal';

// Defina o tipo correto para os países
interface Country {
  name: string; // Nome do país
  capital: string; // Capital do país
  population: number; // População do país
  area: number; // Área do país em km²
  // Adicione mais propriedades conforme necessário
}

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState<Country[]>([]); // Estado para armazenar os países encontrados
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null); // Tipo correto para o país selecionado

  const handleSearch = async (query: string) => {
    setSearchQuery(query);

    try {
      const response = await axios.get<Country[]>(`https://restcountries.com/v3.1/name/${query}`); // Requisição para a API de países
      setCountries(response.data); // Define os países encontrados no estado
    } catch (error) {
      console.error('Error fetching countries:', error);
      setCountries([]); // Limpa a lista de países em caso de erro
    }
  };

  const handleCountryClick = (country: Country) => { // Corrigido para usar o tipo Country
    setSelectedCountry(country);
  };

  const handleCloseModal = () => {
    setSelectedCountry(null);
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      <ResultsList countries={countries} onItemClick={handleCountryClick} /> {/* Corrigido para passar o tipo correto para onItemClick */}
      <CountryModal countryInfo={selectedCountry} onClose={handleCloseModal} />
    </Container>
  );
};

export default HomePage;