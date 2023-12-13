import { Link } from "react-router-dom";
import "./CocktailListItem.scss";

const CocktailListItem = (props) => {

  // When the user clicks on div, open the popup
  const popupFunction = () => {

      fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`)
          .then(response => response.json())
          .then(data => console.log(data.drinks));
          
      var popup = document.getElementById("myPopup");
      popup.textContent = `POPOPOPOPUP`
      popup.classList.toggle("show");
  }

  return (
    <div onClick={popupFunction} key={props.id} className="polaroid popup">
      <div className="popuptext" id="myPopup">
        <img src={props.img} alt={props.name} />
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default CocktailListItem;
