import Home from "../../page/Home";
import Darkmode from "../darkmode/Darkmode";
import Searchbar from "../Searchbar/Searchbar";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <h1>Bärbels Mixstube</h1>
      <div>
        <div className="logo_favorite">
          <Link to="/">
            <img className="logo" src="./logo.png" alt="" />
          </Link>
          <Link to="/favorites">My Favorits</Link>
        </div>
        <div className="searchbar_container">
        <Searchbar />
        </div>
        <Darkmode />
      </div>
    </header>
  );
};

export default Header;
