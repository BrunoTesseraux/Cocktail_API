import { useContext, useEffect, useState } from "react";
import "./CocktailDetails.scss";
import { FavListContext } from "../Context/Context";

const CocktailDetails = ({
  name,
  img,
  beschreibung,
  zutat1,
  zutat2,
  zutat3,
  zutat4,
  zutat5,
  measure1,
  measure2,
  measure3,
  measure4,
  measure5,
  cocktail,
}) => {

  const favListContext = useContext(FavListContext);
  
 const addToFavList = () => {
  favListContext.setFavCocktails((prevFavCocktails) => {
    const updatedFavCocktails = prevFavCocktails.concat(cocktail);
    localStorage.setItem("drink", JSON.stringify(updatedFavCocktails));
    return updatedFavCocktails;
  });
};

  return (
    <>
      <div className="card">
        <div className="imgBox">
          <div className="bark"></div>
          <img src={`${img}`} />
          <div className="book-bottom">
            <h2>{name}</h2>
          </div>
        </div>
        <div className="details">
          <h4 className="color1">{name}</h4>
          <p>
            {zutat1} {measure1}
          </p>
          <p>
            {zutat2} {measure2}
          </p>
          <p>
            {zutat3} {measure3}
          </p>
          <p>
            {zutat4} {measure4}
          </p>
          <p>
            {zutat5} {measure5}
          </p>
          <p>{beschreibung}</p>
        <button className="favorite-btn" onClick={addToFavList}>❤️</button>
        </div>
      </div>
    </>
  );
};

export default CocktailDetails;
