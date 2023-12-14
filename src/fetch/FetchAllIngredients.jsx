import { useContext, useEffect, useState } from "react";
import { AllIngredientsContext } from "../components/Context/Context";


const FetchAllIngredients = () => {

    const allIngredientsState = useContext(AllIngredientsContext);

    const allIngredients = allIngredientsState.allIngredients;  
    const setAllIngredients = allIngredientsState.setAllIngredients;

    const [getData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
// by List the categories, glasses, ingredients or alcoholic filters
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setAllIngredients([...allIngredients, data.drinks]);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

}

export default FetchAllIngredients;