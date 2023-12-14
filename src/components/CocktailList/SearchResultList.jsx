import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CocktailListItem from "../CocktailListItem/CocktailListItem";


const SearchResultList = () => {
    
    const [cocktailFetch, setCocktailFetch] = useState([]);
    const keyword = useParams();
    const cocktailNameValue = keyword.name;

    // =============================== styles begin =========================================================
    useEffect(() => {
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
        style()
    }, [cocktailFetch])
  // =================================== styles end =========================================================

  console.log(cocktailFetch[0]?.drinks);
    useEffect(() => {
            fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailNameValue}`)
                .then(response => response.json())
                .then(data => setCocktailFetch([data]))
                .catch((error) => console.log(error))
    }, [cocktailNameValue])

    return (cocktailFetch[0]?.drinks < 1 ? <p>No Results</p> :  (<section className="wrapper">
            {cocktailFetch[0]?.drinks.map((cocktail, index) => 
            <CocktailListItem
            key={index}
            id={cocktail.idDrink}
            name={cocktail.strDrink}
            img={cocktail.strDrinkThumb}
        />)}
        </section>)
    );
}

export default SearchResultList;