import { useState } from "react";
import { Link } from "react-router-dom";

const Searchbar = () => {

  const [cocktailName, setCocktailName] = useState("");
  
  return <>
      <input onChange={(event) => setCocktailName(event.target.value)} type="text" placeholder="Search cocktail by name" value={cocktailName}/>
      <Link to={`/test-cocktail/${cocktailName}`}>Search</Link>
    </>;
};

export default Searchbar;
