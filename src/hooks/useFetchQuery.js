import React, {useEffect} from "react";
const useFetchQuery = (query, params) => {
    const [fetching, setFetching] = React.useState(false);
    const [data, setData] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);


    const refetch = () => {
        setFetching(true);
    }

    const fetchQuery =async ()=> {
        try {
            setLoading(true);
            const response = await query(params)
            setData(response.data)
        } catch (e){
            setError(true);
        }finally {
            setLoading(false);
            setFetching(false);
        }
    }

    useEffect(()=>{
        if (fetching) fetchQuery();
    }, [fetching])

    useEffect(()=>{
        fetchQuery();
    }, [params])

    return {
        data, loading, error, refetch
    }
}

export default useFetchQuery;