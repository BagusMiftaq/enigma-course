import React from "react";
import {Button} from "react-bootstrap";
import {StyledContainer, EmptyState, Pagination} from "../components";
import {useNavigate} from "react-router-dom";
import useFetchQuery from "../hooks/useFetchQuery";

export default (ListComponent, opts) => {
    return (props) => {
        const  onNavigate=useNavigate();
        const { label, navAdd, query} = opts;
        const [currentPage, setCurrentPage] = React.useState(1);
        const {data, loading, error, refetch} = useFetchQuery(query, currentPage)

        // console.log("Data yaa", data);

        if (loading) return <h2>Loading....</h2>;
        if (error) return <h2>Error....</h2>

        return (
            <>
                <StyledContainer>
                    <Button variant="success" onClick={() => onNavigate(navAdd)}>Add {label}</Button>
                    {data?.data?.length > 0 ? (
                        <ListComponent data={data.data} {...props} refetch={refetch}/>
                    ): <EmptyState text={`Data ${label} Kosong...`} />}
                </StyledContainer>
                <Pagination
                    totalPage={data?.totalPage}
                    onChangeCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </>
        )
    }
}
