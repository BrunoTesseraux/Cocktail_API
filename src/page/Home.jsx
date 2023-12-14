import { Link } from "react-router-dom";
import "./Home.scss";
import { useContext, useState } from "react";
import { AllIngredientsContext } from "../components/Context/Context";
const Home = () => {
  const allIngredientsContext = useContext(AllIngredientsContext);
  const allIngredientsState = allIngredientsContext.allIngredients[0];
  const [cocktailName, setCocktailName] = useState("");

  return (
    <>
      {/* Gin */}
      <div className="link_container">
        <Link
          className="link"
          onMouseEnter={(event) => setCocktailName(event.target.textContent)}
          to={`/cocktails/${cocktailName.trim().toLowerCase()}`}
        >
          <div className="test">
            <img src="" alt="" /> <h3>Gin</h3>{" "}
          </div>
        </Link>
      </div>

      {/* Vodka */}
      <div className="link_container">
        <Link
          className="link"
          onMouseEnter={(event) => setCocktailName(event.target.textContent)}
          to={`/cocktails/${cocktailName.trim().toLowerCase()}`}
        >
          <div className="test">
            <img src="" alt="" /> <h3>Vodka</h3>{" "}
          </div>
        </Link>
      </div>

      {/* Rum */}
      <div className="link_container">
        <Link
          className="link"
          onMouseEnter={(event) => setCocktailName(event.target.textContent)}
          to={`/cocktails/${cocktailName.trim().toLowerCase()}`}
        >
          <div className="test">
            <img src="" alt="" /> <h3>Rum</h3>{" "}
          </div>
        </Link>
      </div>

      {/* All ingredients */}
      <div className="all-ingredients-container">
        {allIngredientsState?.map((ingredient, index) => (
          <Link
            key={index}
            onMouseEnter={(event) => setCocktailName(event.target.textContent)}
            to={`/cocktails/${cocktailName.trim().toLowerCase()}`}
          >
            <h2>{ingredient.strIngredient1}</h2>
          </Link>
        ))}
      </div>

      {/* Alkoholfrei */}
      {/* <FetchAlcFreeList />
      <Link to="/alcfree">zur Alkoholfrei Liste</Link> */}

      {/* Random */}
      {/* <FetchRandomList />
      <Link to="/random">zur Random Liste</Link> */}
    </>
  );
};

export default Home;
