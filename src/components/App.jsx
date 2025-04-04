import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import callToApi from "../services/api";
import logo from "../images/rick-and-morty-logo.png";
import "../scss/App.scss";
import CharactersList from "./CharactersList";
import Filters from "./Filters";

function App() {
  const [charactersData, setCharactersData] = useState([]);
  const [nameInput, setNameInput] = useState("");

  useEffect(() => {
    callToApi().then((response) => {
      setCharactersData(response);
    });
  }, []);

  const handleNameChange = (value) => {
    setNameInput(value);
  };

  const filteredCharacters = charactersData.filter((character) => {
    return character.name.toLowerCase().includes(nameInput.toLowerCase());
  });

  return (
    <>
      <header>
        <img src={logo} alt="Logo de Rick and Morty" />
      </header>
      <main>
        <Filters handleNameChange={handleNameChange} />
        {filteredCharacters.length === 0 ? (
          `No hay ningún personaje que coincida con la palabra ${nameInput}`
        ) : (
          <CharactersList characters={filteredCharacters} />
        )}
      </main>
    </>
  );
}

export default App;
