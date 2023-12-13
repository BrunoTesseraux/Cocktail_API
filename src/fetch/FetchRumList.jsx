import { useContext, useEffect, useState } from "react";
import { RumContext } from "../components/Context/Context";


const FetchRumList = () => {
    
    const rumCocktailsState = useContext(RumContext);
    const setRumCocktailsList = rumCocktailsState.setRumCocktailsList;
    const rumCocktailsList = rumCocktailsState.rumCocktailsList;

    // Konsolen-Ausgabe
    console.log("%c Rum: ", "background-color: indianred", rumCocktailsList);
    
    const [getData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch Rum
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(setRumCocktailsList([...rumCocktailsList, data.drinks]));
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);
}

export default FetchRumList;