import { useContext, useEffect, useState } from "react";
import { AlcFreeContext } from "../components/Context/Context";


const FetchAlcFreeList = () => {
    
    const alcFreeCocktailsState = useContext(AlcFreeContext);
    const setAlcFreeCocktailsList = alcFreeCocktailsState.setAlcFreeCocktailsList;
    const alcFreeCocktailsList = alcFreeCocktailsState.alcFreeCocktailsList;
    
    // Konsolen-Ausgabe
    console.log("%c AlcFree: ", "background-color: green", alcFreeCocktailsList);
    
    const [getData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch Alkoholfrei
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(setAlcFreeCocktailsList([...alcFreeCocktailsList, data.drinks]));
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);
}

export default FetchAlcFreeList;