import { useEffect, useState } from "react";

function useFetch(url:string, options?:RequestInit) {
    if (options == null || options==undefined) {
        options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    }

    const [errors, setErrors] = useState<string|null>(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
         let isMounted = true;
            fetch(url, {
            ...options,
            headers: {
                'Accept': 'application/json; charset=UTF-8',
                ...options.headers
            }
        })
        .then(response => {
            if (!response.ok) {
                setErrors(response.status.toString());
                setData(null);
                setLoading(false);
                throw new Error(response.statusText);
            }
            return response.json()
        })
        .then(data => {
            if (isMounted) {
                setData(data); 
                setLoading(false); 
            }
        })
        .catch(error => {
            if (isMounted) {
                setErrors(error); setData(null);setLoading(false);
            }
        })

        return ()=>{
            isMounted = false;
        }
    }, [url]);

    return {
        errors, data, loading
    }
}

export default useFetch;