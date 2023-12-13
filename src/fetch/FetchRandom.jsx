import { useEffect, useState } from "react";

const FetchRandom = () => {
    const [getData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <section>
            {getData?.map((cock, index) => (
                <div key={index}>{cock.strDrink}</div>
            ))}
        </section>
    );
}

export default FetchRandom;