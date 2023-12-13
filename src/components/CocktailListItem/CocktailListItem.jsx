import { Link } from "react-router-dom";
import "./CocktailListItem.scss";

const CocktailListItem = ({key, id, name, img}) => {

  // When the user clicks on div, open the popup
  const popupFunction = () => {

      fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`)
          .then(response => response.json())
          .then(data => console.log(data.drinks));
          
      let popup = document.getElementById(id);
      popup.textContent = `POPOPOPOPUP`
      popup.classList.toggle = "show";
  }

  return (
    <div onClick={popupFunction} key={id} className="polaroid popup">
      <div id={id}>
        <img src={img} alt={name} />
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default CocktailListItem;
