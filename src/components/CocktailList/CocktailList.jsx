import CocktailListItem from "../CocktailListItem/CocktailListItem";
import { useContext, useEffect, useState } from "react";
import {
  GinContext,
  VodkaContext,
  RumContext,
  AlcFreeContext,
} from "../Context/Context";
import { useParams } from "react-router-dom";
import "./CocktailList.scss";

const CocktailList = () => {
  const cocktailIngredient = useParams();
  const endpoint = cocktailIngredient.name;
  const [apiData, setApiData] = useState([]);

  const ginCocktailContext = useContext(GinContext);
  const vodkaCocktailContext = useContext(VodkaContext);
  const rumCocktailContext = useContext(RumContext);

  // =============================== Styles begin =========================================================
  // useEffect(() => {
  //   const style = () => {
  //     const polaroids = document.querySelectorAll(".polaroid");

  //     polaroids.forEach(function (polaroid) {
  //       const randomRotation = Math.floor(Math.random() * 11) - 5; // Zufälliger Winkel zwischen -5 und 5 Grad
  //       const randomXOffset = Math.floor(Math.random() * 21) - 10; // Zufällige Verschiebung zwischen -10px und 10px horizontal
  //       const randomYOffset = Math.floor(Math.random() * 21) - 10; // Zufällige Verschiebung zwischen -10px und 10px vertikal

  //       const transformValue =
  //         "rotate(" +
  //         randomRotation +
  //         "deg) translateX(" +
  //         randomXOffset +
  //         "px) translateY(" +
  //         randomYOffset +
  //         "px)";

  //       polaroid.style.transform = transformValue;
  //     });
  //   };
  //   style();
  // }, [apiData]);
  // =================================== Styles end =========================================================

  useEffect(() => {
    if (endpoint && !["gin", "vodka", "rum"].includes(endpoint)) {
      // Fetch data only if the endpoint is not gin, vodka, or rum
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${endpoint}`
      )
        .then((response) => response.json())
        .then((data) => setApiData([...apiData, data.drinks]))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [endpoint]);

  //conditional rendering

  const RenderCocktails = () => {
    if (cocktailIngredient.name === "gin") {
      return (
        <section>
          {/* <button onClick={style()}>STYLE</button> */}
          {ginCocktailContext.ginCocktailsList.map((cockArray, index) => (
            <div key={index} className="wrapper">
              {cockArray.map((cock, subIndex) => (
                <CocktailListItem
                  key={subIndex}
                  id={cock.idDrink}
                  name={cock.strDrink}
                  img={cock.strDrinkThumb}
                />
              ))}
            </div>
          ))}
        </section>
      );
    } else if (cocktailIngredient.name === "vodka") {
      return (
        <section>
          {/* <button onClick={style()}></button> */}
          {vodkaCocktailContext.vodkaCocktailsList.map((cockArray, index) => (
            <div key={index} className="wrapper">
              {cockArray.map((cock, subIndex) => (
                <CocktailListItem
                  key={subIndex}
                  id={cock.idDrink}
                  name={cock.strDrink}
                  img={cock.strDrinkThumb}
                />
              ))}
            </div>
          ))}
        </section>
      );
    } else if (cocktailIngredient.name === "rum") {
      return (
        <section>
          {/* <button onClick={style()}></button> */}
          {rumCocktailContext.rumCocktailsList.map((cockArray, index) => (
            <div key={index} className="wrapper">
              {cockArray.map((cock, subIndex) => (
                <CocktailListItem
                  key={subIndex}
                  id={cock.idDrink}
                  name={cock.strDrink}
                  img={cock.strDrinkThumb}
                />
              ))}
            </div>
          ))}
        </section>
      );
    } else {
      return (
        <section className="wrapper">
          {apiData[0]?.map((drink, index) => (
            <CocktailListItem
              key={index}
              id={drink.idDrink}
              name={drink.strDrink}
              img={drink.strDrinkThumb}
            />
          ))}
        </section>
      );
    }
  };

  return <RenderCocktails />;
};

export default CocktailList;
