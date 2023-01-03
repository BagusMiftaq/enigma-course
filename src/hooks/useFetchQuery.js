import React, {useEffect} from "react";
const useFetchQuery = (query, params) => {
    const [data, setData] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    const fetchQuery =async ()=> {
        try {
            setLoading(true);
            const response = await query(params)
            setData(response.data)
        } catch (e){
            setError(true);
        }finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchQuery();
    }, [params])

    return {
        data, loading, error
    }
}

export default useFetchQuery;