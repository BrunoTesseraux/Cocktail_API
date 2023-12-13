import Home from "../../page/Home";
import Darkmode from "../darkmode/Darkmode";
import Searchbar from "../Searchbar/Searchbar";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <h1>Mixology 101</h1>
      <div>
        <Link to="/">Logo</Link>
        <Searchbar />
        <Darkmode />
      </div>
    </header>
  );
};

export default Header;
