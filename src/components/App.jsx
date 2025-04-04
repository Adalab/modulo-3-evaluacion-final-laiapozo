import { Route, Routes, useLocation, matchPath } from "react-router-dom";
import { useEffect, useState } from "react";
import callToApi from "../services/api";
import ls from "../services/localStorage";
import logo from "../images/rick-and-morty-logo.png";
import "../scss/App.scss";
import CharactersList from "./CharactersList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [charactersData, setCharactersData] = useState([]);
  const [nameInput, setNameInput] = useState(ls.get("Name searched", ""));

  useEffect(() => {
    callToApi().then((response) => {
      setCharactersData(response);
    });
  }, []);

  useEffect(() => {
    ls.set("Name searched", nameInput);
  }, [nameInput]);

  const handleNameChange = (value) => {
    setNameInput(value);
  };

  const filteredCharacters = charactersData.filter((character) => {
    return character.name.toLowerCase().includes(nameInput.toLowerCase());
  });

  const { pathname } = useLocation();
  const routeData = matchPath("/detail/:id", pathname);
  let idCharacterRoute = undefined;
  if (routeData !== null) {
    idCharacterRoute = routeData.params.id;
  }
  const characterSelected = filteredCharacters.find((character) => {
    return character.id === parseInt(idCharacterRoute);
  });

  return (
    <>
      <header>
        <img src={logo} alt="Logo Rick and Morty" />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters name={nameInput} handleNameChange={handleNameChange} />
                {filteredCharacters.length === 0 ? (
                  `We can't find this character in any world: ${nameInput}`
                ) : (
                  <CharactersList characters={filteredCharacters} />
                )}
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={<CharacterDetail character={characterSelected} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
