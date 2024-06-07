import React, { useState } from "react";

//* Interfaces imports...
import { Country } from "../../utils/Interfaces";

//* Api method to search countries import...
import { searchCountries } from "../../utils/api";

//* styled-compoents components imports...
import { InputStyled } from "./styles";

interface SearchBarProps {
  onSearch: (countries: Country[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      const countries = await searchCountries(searchQuery); // Use a função de busca de países
      onSearch(countries);
    } catch (error) {
      console.error('Error searching countries:', error);
      onSearch([]); // Limpa a lista de países em caso de erro
    }
  };

  return (
    <div>
      <InputStyled
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search countries"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;