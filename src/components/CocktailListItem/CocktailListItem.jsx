import { Link } from "react-router-dom";
import "./CocktailListItem.scss";

const CocktailListItem = (props) => {
  return (
    <div key={props.id} className="polaroid">
      <Link to={`./cocktail/${props.id}`}>
        <img src={props.img} alt={props.name} />
        <h3>{props.name}</h3>
      </Link>
    </div>
  );
};

export default CocktailListItem;
