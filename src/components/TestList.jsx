import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const TestList = () => {
    
    const [cocktailFetch, setCocktailFetch] = useState([]);
    const keyword = useParams();
    const cocktailName = keyword.name;
    // console.log("state", cocktailFetch[0].drinks);
    const refresh = useLocation();
    console.log(useLocation);
    console.log(keyword);

    useEffect(() => {
        fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
            .then(response => response.json())
            .then(data => setCocktailFetch([...cocktailFetch, data]))
    }, [])

    return ( 
        <article>
            {cocktailFetch[0]?.drinks.map((cocktail) => <div>
                <h2>{cocktail.strDrink}</h2>
            </div>)}
        </article>
    );
}

export default TestList;