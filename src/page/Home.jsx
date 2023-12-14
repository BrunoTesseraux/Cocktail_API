import { Link } from "react-router-dom";
import "./Home.scss";
import { useContext, useState } from "react";
import { AllIngredientsContext } from "../components/Context/Context";
const Home = () => {
  const allIngredientsContext = useContext(AllIngredientsContext);
  const allIngredientsState = allIngredientsContext.allIngredients[0];
  const [cocktailName, setCocktailName] = useState("");

  return (
    <section className="home">
      {/* Gin */}
      <Link
        className="link"
        onMouseEnter={(event) => setCocktailName(event.target.textContent)}
        to={`/cocktails/${cocktailName.trim().toLowerCase()}`}
      >
        <div className="polaroid">
          <div className="test">
            <img src="./gin.avif" className="home-link" alt="" /> <h3>Gin</h3>{" "}
          </div>
        </div>
      </Link>

      {/* Vodka */}
      <Link
        className="link"
        onMouseEnter={(event) => setCocktailName(event.target.textContent)}
        to={`/cocktails/${cocktailName.trim().toLowerCase()}`}
      >
        <div className="polaroid">
          <div className="test">
            <img src="./vodka.avif" className="home-link" alt="" />{" "}
            <h3>Vodka</h3>{" "}
          </div>
        </div>
      </Link>

      {/* Rum */}
      <Link
        className="link"
        onMouseEnter={(event) => setCocktailName(event.target.textContent)}
        to={`/cocktails/${cocktailName.trim().toLowerCase()}`}
      >
        <div className="polaroid">
          <div className="test">
            <img src="./rum.avif" className="home-link" alt="" /> <h3>Rum</h3>{" "}
          </div>
        </div>
      </Link>

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
    </section>
  );
};

export default Home;
