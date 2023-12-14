import { useState } from "react";
import { Link } from "react-router-dom";
import "./Searchbar.scss";

const Searchbar = () => {
  const [cocktailName, setCocktailName] = useState("");

  return (
    <div className="searchbar">
      <input
        onClick={(event) => setCocktailName("")}
        onChange={(event) => setCocktailName(event.target.value)}
        type="text"
        placeholder="Search cocktail by name"
        value={cocktailName}
      />
      <Link to={`/${cocktailName}`}>
        <button>Search</button>
      </Link>
    </div>
  );
};

export default Searchbar;
