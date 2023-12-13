import CocktailListItem from "../CocktailListItem/CocktailListItem";
import { useContext } from "react";
import { GinContext } from "../Context/Context";
import "./GinCocktailList.scss";

const GinCocktailList = () => {
  const style = () => {
    const polaroids = document.querySelectorAll(".polaroid");

    polaroids.forEach(function (polaroid) {
      const randomRotation = Math.floor(Math.random() * 11) - 5; // Zufälliger Winkel zwischen -5 und 5 Grad
      const randomXOffset = Math.floor(Math.random() * 21) - 10; // Zufällige Verschiebung zwischen -10px und 10px horizontal
      const randomYOffset = Math.floor(Math.random() * 21) - 10; // Zufällige Verschiebung zwischen -10px und 10px vertikal

      const transformValue =
        "rotate(" +
        randomRotation +
        "deg) translateX(" +
        randomXOffset +
        "px) translateY(" +
        randomYOffset +
        "px)";

      polaroid.style.transform = transformValue;
    });
  };

  const ginCocktailContext = useContext(GinContext);

  return (
    <section>
      <button onClick={style()}></button>
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
};

export default GinCocktailList;
