import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import callToApi from "../services/api";
import logo from "../images/rick-and-morty-logo.png";
import "../scss/App.scss";
import CharactersList from "./CharactersList";
import Filters from "./Filters";

function App() {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    callToApi().then((response) => {
      setCharactersData(response);
    });
  }, []);

  return (
    <>
      <header>
        <img src={logo} alt="Logo de Rick and Morty" />
      </header>
      <main>
        <Filters />
        <CharactersList characters={charactersData} />
      </main>
    </>
  );
}

export default App;
