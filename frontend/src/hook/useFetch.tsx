import { useEffect, useState } from "react";

function useFetch(url:string, options:RequestInit) {

    const [errors, setErrors] = useState<string|null>(null);
    const [data, setData] = useState(null);

    useEffect(() => {
            fetch(url, {
            ...options,
            headers: {
                'Accept': 'application/json; charset=UTF-8',
                ...options.headers
            }
        })
        .then(response => {
            if (!response.ok) {
                setErrors(response.statusText)
            }
            return response.json()
        })
        .then(data => {setData(data)})
        .catch(error => {setErrors(error)})
    }, []);

    return {
        errors, data
    }
}

export default useFetch;