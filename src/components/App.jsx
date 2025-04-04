import { Route, Routes, Link, useLocation, matchPath } from "react-router-dom";
import { useEffect, useState } from "react";
import callToApi from "../services/api";
import ls from "../services/localStorage";
import logo from "../images/rick-and-morty-logo.png";
import "../scss/App.scss";
import CharactersList from "./CharactersList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import PageNotFound from "./PageNotFound";

function App() {
  const [charactersData, setCharactersData] = useState([]);
  const [nameInput, setNameInput] = useState(ls.get("Name searched", ""));
  const [statusInput, setStatusInput] = useState(ls.get("Status searched", ""));
  const [speciesInput, setSpeciesInput] = useState(
    ls.get("Species searched", "")
  );
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    callToApi().then((response) => {
      setCharactersData(response);
    });
  }, []);

  useEffect(() => {
    ls.set("Name searched", nameInput);
  }, [nameInput]);

  useEffect(() => {
    ls.set("Status searched", statusInput);
  }, [statusInput]);

  useEffect(() => {
    ls.set("Species searched", speciesInput);
  }, [speciesInput]);

  const handleNameChange = (value) => {
    setNameInput(value);
  };

  const handleStatusChange = (value) => {
    setStatusInput(value);
  };

  const handleSpeciesChange = (value) => {
    setSpeciesInput(value);
  };

  const handleResetButton = () => {
    setNameInput("");
    setStatusInput("");
    setSpeciesInput("");
  };

  const filteredCharacters = charactersData
    .filter((character) => {
      return character.name.toLowerCase().includes(nameInput.toLowerCase());
    })
    .filter((character) => {
      return statusInput === "" ? true : character.status === statusInput;
    })
    .filter((character) => {
      return speciesInput === "" ? true : character.species === speciesInput;
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
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Logo Rick and Morty" />
        </Link>
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  name={nameInput}
                  handleNameChange={handleNameChange}
                  status={statusInput}
                  handleStatusChange={handleStatusChange}
                  species={speciesInput}
                  handleSpeciesChange={handleSpeciesChange}
                  handleResetButton={handleResetButton}
                />
                {filteredCharacters.length === 0 ? (
                  `⚠️ We can't find this character in The Multiverse`
                ) : (
                  <CharactersList characters={filteredCharacters} />
                )}
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={
              characterSelected === undefined ? (
                <PageNotFound />
              ) : (
                <CharacterDetail character={characterSelected} />
              )
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
