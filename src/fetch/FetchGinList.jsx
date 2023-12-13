import { useContext, useEffect, useState } from "react";
import { GinContext } from "../components/Context/Context";


const FetchByIngredient = () => {
    
    // importieren context
    const ginCocktailsState = useContext(GinContext);
    const setGinCocktailsList = ginCocktailsState.setGinCocktailsList;
    const ginCocktailsList = ginCocktailsState.ginCocktailsList;

    console.log(ginCocktailsList);
    
    const [getData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
// by ingredient
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(setGinCocktailsList([...ginCocktailsList, data.drinks]));
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);
}

export default FetchByIngredient;