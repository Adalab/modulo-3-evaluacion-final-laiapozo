import { Link } from "react-router-dom";
import imageNotFound from "../images/page-not-found.png";
import "../scss/components/PageNotFound.scss";

const PageNotFound = () => {
  return (
    <section className="container">
      <Link to="/">
        <i className="container__arrow fa-solid fa-arrow-left"></i>
      </Link>
      <img
        className="container__img"
        src={imageNotFound}
        alt="Page not found"
      />
    </section>
  );
};

export default PageNotFound;
