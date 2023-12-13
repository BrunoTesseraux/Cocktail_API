import {Link} from "react-router-dom"

const CocktailListItem = (props) => {
  return <article>
    <Link to={`./cocktail/${props.idDrink}`}>
        <img src={props.strDrinkThumb} alt={props.strDrink}/>
        <h3>{props.strDrink}</h3>

    </Link>
        </article>;
};

export default CocktailListItem;
