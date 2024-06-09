import React, { useState } from "react";

//* Api method to search countries import...
import { searchCountries } from "../../utils/api";

//* Importing components created with styled-components...
import { InputStyled } from "./styles";

interface SearchBarProps {
  onSearch: (query: string) => void; // Corrigido para receber query como string
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      await searchCountries(searchQuery); // Use a função de busca de países
      onSearch(searchQuery); // Corrigido para passar a string de pesquisa
    } catch (error) {
      console.error('Error searching countries:', error);
      onSearch(''); // Limpa a pesquisa em caso de erro
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