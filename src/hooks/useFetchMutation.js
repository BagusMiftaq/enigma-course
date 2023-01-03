import React from "react";

const useFetchMutation = (mutation, onSuccess) => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    const fetchMutation = async (data)=>{
        try {
            setLoading(true);
            await mutation(data);
            onSuccess?.();
        } catch (e){
            setError(true);
        }finally {
            setLoading(false);
        }
    }

    return {loading, error,fetchMutation}
}

export default useFetchMutation;