import { useContext, useEffect, useState } from "react";
import CocktailDetails from "../CocktailDetails/CocktailDetails";
import "./CocktailListItem.scss";
import { FavListContext } from "../Context/Context";

const CocktailListItem = ({ id, name, img }) => {
  const [cocktail, setCocktail] = useState([]);

  // When the user clicks on div, open the popup
  const popupFunction = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => setCocktail([...cocktail, data.drinks[0]]));

    let popup = document.getElementById(id);
    // popup.textContent = `POPOPOPOPUP`;
    popup.classList.toggle("show");
  };

  return (
    <div onClick={popupFunction} key={id} className="polaroid popup">
      <img src={img} className="home-link" alt={name} />
      <h3>{name}</h3>
      
      <span className="popuptext" id={id}>
        <CocktailDetails
          name={cocktail[0]?.strDrink}
          img={cocktail[0]?.strDrinkThumb}
          beschreibung={cocktail[0]?.strInstructionsDE}
          zutat1={cocktail[0]?.strIngredient1}
          zutat2={cocktail[0]?.strIngredient2}
          zutat3={cocktail[0]?.strIngredient3}
          zutat4={cocktail[0]?.strIngredient4}
          zutat5={cocktail[0]?.strIngredient5}
          measure1={cocktail[0]?.strMeasure1}
          measure2={cocktail[0]?.strMeasure2}
          measure3={cocktail[0]?.strMeasure3}
          measure4={cocktail[0]?.strMeasure4}
          measure5={cocktail[0]?.strMeasure5}
          cocktail={cocktail}
        />
      </span>
    </div>
  );
};

export default CocktailListItem;
