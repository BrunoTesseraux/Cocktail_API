import { Link } from "react-router-dom";
import "./Home.scss";
import { useContext, useState } from "react";
import { AllIngredientsContext } from "../components/Context/Context";
import Random from "../components/random/Random";
const Home = () => {
  const allIngredientsContext = useContext(AllIngredientsContext);
  const allIngredientsState = allIngredientsContext.allIngredients[0];
  const [cocktailName, setCocktailName] = useState("");

  return (
    <section className="home">
      {/* Gin */}

      <Link className="link" to="/cocktails/gin">
  <div className="polaroid">
    <div className="test">
      <img src="./gin.avif" className="home-link" alt="" />
      <h3>Gin</h3>
    </div>
  </div>
</Link>

  {/*     <Link
        className="link"
        onMouseEnter={(event) => setCocktailName(event.target.textContent)}
        to={`/cocktails/${cocktailName.trim().toLowerCase()}`}
      >
        <div className="polaroid">
          <div className="test">
            <img src="./gin.avif" className="home-link" alt="" /> <h3>Gin</h3>{" "}
          </div>
        </div>
      </Link> */}

      {/* Vodka */}



      <Link className="link" to="/cocktails/vodka">
  <div className="polaroid">
    <div className="test">
      <img src="./vodka.avif" className="home-link" alt="" />
      <h3>Vodka</h3>
    </div>
  </div>
</Link>




{/*       <Link
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
      </Link> */}

      {/* Rum */}

      <Link className="link" to="/cocktails/rum">
  <div className="polaroid">
    <div className="test">
      <img src="./rum.avif" className="home-link" alt="" />
      <h3>Rum</h3>
    </div>
  </div>
</Link>



     {/*  <Link
        className="link"
        onMouseEnter={(event) => setCocktailName(event.target.textContent)}
        to={`/cocktails/${cocktailName.trim().toLowerCase()}`}
      >
        <div className="polaroid">
          <div className="test">
            <img src="./rum.avif" className="home-link" alt="" /> <h3>Rum</h3>{" "}
          </div>
        </div>
      </Link> */}

      {/* All ingredients */}
      <div className="all-ingredients-container">
  {allIngredientsState?.map((ingredient, index) => (
    <Link
      key={index}
      className="link"
      to={`/cocktails/${ingredient.strIngredient1.trim().toLowerCase()}`}
    >
      <h2>{ingredient.strIngredient1}</h2>
    </Link>
  ))}
</div>

     {/*  <div className="all-ingredients-container">
        {allIngredientsState?.map((ingredient, index) => (
          <Link
            key={index}
            onMouseEnter={(event) => setCocktailName(event.target.textContent)}
            to={`/cocktails/${cocktailName.trim().toLowerCase()}`}
          >
            <h2>{ingredient.strIngredient1}</h2>
          </Link>
        ))}
      </div> */}

     

      <Random/>
    </section>
  );
};

export default Home;
