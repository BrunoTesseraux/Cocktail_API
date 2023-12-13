import { useContext, useEffect, useState } from "react";
import { RandomCocktailContext } from "../components/Context/Context";

const FetchRandomList = () => {
    const [getData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const randomCocktailState = useContext(RandomCocktailContext);
    const setRandomCocktail = randomCocktailState.setRandomCocktail;
    const randomCocktail = randomCocktailState.randomCocktail;

    // Konsolen-Ausgabe
    console.log("%c Random: ", "background-color: yellow; color: black", randomCocktail);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(setRandomCocktail([...randomCocktail, data.drinks]));
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);
}

export default FetchRandomList;