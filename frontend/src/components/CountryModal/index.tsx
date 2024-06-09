import React from "react";

//* Importing components created with styled-components...
import { ModalContent } from "./styles";

interface Country {
  name: string;
  capital: string;
  population: number;
  area: number;
}

interface CountryModalProps {
  countryInfo: Country | null;
  onClose: () => void;
}

const CountryModal: React.FC<CountryModalProps> = ({ countryInfo, onClose }) => {
  return (
    <ModalContent>
      <h2>Country Information</h2>
      {countryInfo ? (
        <div>
          <p>Name: {countryInfo.name}</p>
          <p>Capital: {countryInfo.capital}</p>
          <p>Population: {countryInfo.population}</p>
          <p>Area: {countryInfo.area} km²</p>
        </div>
      ) : (
        <p>No country selected.</p>
      )}
      <button onClick={onClose}>Close</button>
    </ModalContent>
  );
};

export default CountryModal;