import { useState } from "react";
import CocktailDetails from "../CocktailDetails/CocktailDetails";

const Random = ({ id, name, img }) => {

  const [random, setRandom] = useState([]);

  // When the user clicks on div, open the popup
  const popupFunction = () => {
    fetch(`www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => setRandom([...random, data.drinks[0]]));

    let popup = document.getElementById(id);
    // popup.textContent = `POPOPOPOPUP`;
    popup.classList.toggle("show");
  };

  return (
    <button onClick={popupFunction} key={id} className="polaroid popup">Random Cocktail
      <span className="popuptext" id={id}>
        <CocktailDetails
          name={random[0]?.strDrink}
          img={random[0]?.strDrinkThumb}
          beschreibung={random[0]?.strInstructionsDE}
          zutat1={random[0]?.strIngredient1}
          zutat2={random[0]?.strIngredient2}
          zutat3={random[0]?.strIngredient3}
          zutat4={random[0]?.strIngredient4}
          zutat5={random[0]?.strIngredient5}
          measure1={random[0]?.strMeasure1}
          measure2={random[0]?.strMeasure2}
          measure3={random[0]?.strMeasure3}
          measure4={random[0]?.strMeasure4}
          measure5={random[0]?.strMeasure5}
        />
      </span>
    </button>
  );
};

export default Random;
