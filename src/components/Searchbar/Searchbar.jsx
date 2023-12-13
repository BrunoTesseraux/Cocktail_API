import { useState } from "react";
import { Link } from "react-router-dom";

const Searchbar = () => {

  const [cocktailName, setCocktailName] = useState("");
  const [refresh, setRefresh] = useState(false);
  console.log(cocktailName);

  return <>
      <input onChange={(event) => setCocktailName(event.target.value)} type="text" placeholder="Search cocktail by name"/>
      <Link onClick={() => setRefresh(!refresh)} state={"test"} to={`/test-cocktail/${cocktailName}`}>Search</Link>
    </>;
};

export default Searchbar;
