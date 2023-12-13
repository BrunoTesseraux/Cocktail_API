import { useContext, useEffect, useState } from "react";
import { GinContext } from "../components/Context/Context";


const FetchGinList = () => {
    
    const ginCocktailsState = useContext(GinContext);
    const setGinCocktailsList = ginCocktailsState.setGinCocktailsList;
    const ginCocktailsList = ginCocktailsState.ginCocktailsList;

    // Konsolen-Ausgabe
    // console.log("%c Gin: ", "background-color: lightgrey; color: black", ginCocktailsList);
    
    const [getData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch Vodka
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

export default FetchGinList;