import { useContext } from "react";
import { FavListContext } from "../Context/Context";
import CocktailListItem from "../CocktailListItem/CocktailListItem";

const FavoriteList = () => {
    const favListContext = useContext(FavListContext);

    return ( 
        <section className="wrapper">
      {favListContext.favCocktails.map((cocktail, index) => (
        <CocktailListItem
        key={index}
        id={cocktail.idDrink}
        name={cocktail.strDrink}
        img={cocktail.strDrinkThumb}
        />
    ))}
    </section>
    );
}
 
export default FavoriteList;