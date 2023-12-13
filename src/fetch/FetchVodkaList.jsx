import { useContext, useEffect, useState } from "react";
import { VodkaContext } from "../components/Context/Context";

const FetchVodkaList = () => {
    
    const vodkaCocktailsState = useContext(VodkaContext);
    const setVodkaCocktailsList = vodkaCocktailsState.setVodkaCocktailsList;
    const vodkaCocktailsList = vodkaCocktailsState.vodkaCocktailsList;

    // Konsolen-Ausgabe
    // console.log("%c Vodka: ", "background-color: blue", vodkaCocktailsList);
    
    const [getData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch Vodka
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(setVodkaCocktailsList([...vodkaCocktailsList, data.drinks]));
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);
}

export default FetchVodkaList;