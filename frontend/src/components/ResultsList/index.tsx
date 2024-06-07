import React from "react";

//* styled-compoents components imports...
import { ListItem, ListStyled } from "./styles";

interface Country {
  id: number;
  name: string;
  capital: string;
}

interface ResultsListProps {
  countries: Country[];
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