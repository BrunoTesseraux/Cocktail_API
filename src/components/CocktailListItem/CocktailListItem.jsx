import {Link} from "react-router-dom"

const CocktailListItem = (props) => {
  console.log(props)
  return <article key={props.id}>
    <Link to={`./cocktail/${props.id}`}>
        <img src={props.img} alt={props.name}/>
        <h3>{props.name}</h3>

    </Link>
        </article>;
};

export default CocktailListItem;
