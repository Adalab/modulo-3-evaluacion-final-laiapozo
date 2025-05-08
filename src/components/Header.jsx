import logo from "../images/rick-and-morty-logo.png";
import { Link } from "react-router-dom";
import "../scss/components/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo Rick and Morty" />
      </Link>
    </header>
  );
};

export default Header;
