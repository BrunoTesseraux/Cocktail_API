import { useEffect, useState } from "react";

const FetchByName = () => {
    const [getData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
// by name
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data.drinks);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

}

export default FetchByName;