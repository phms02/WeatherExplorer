import React from "react";

//* Importing components created with styled-components...
import { ListItem, ListStyled } from "./styles";

interface Country {
  id: number;
  name: string;
  capital: string;
  population: number;
  area: number;
}

interface ResultsListProps {
  countries: Country[]; // Certifique-se de que Country esteja importado corretamente e tenha o campo id
  onItemClick: (country: Country) => void;
}

const ResultsList: React.FC<ResultsListProps> = ({ countries, onItemClick }) => {
  return (
    <ListStyled>
      {countries.map((country) => (
        <ListItem key={country.id} onClick={() => onItemClick(country)}>
          {country.name}
        </ListItem>
      ))}
    </ListStyled>
  );
};

export default ResultsList;