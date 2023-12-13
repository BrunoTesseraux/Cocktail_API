import Home from "../../page/Home";
import Darkmode from "../darkmode/Darkmode";
import Searchbar from "../Searchbar/Searchbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">Logo</Link>
      <Searchbar />
      <Darkmode />
    </>
  );
};

export default Header;
