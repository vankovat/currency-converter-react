import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const res = await fetch(url);
                const data = await res.json();

                setResponse(data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, [url]);

    return { response, error, isLoading };
};
