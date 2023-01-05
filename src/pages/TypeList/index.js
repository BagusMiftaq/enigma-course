import React from "react";

import withPaginationList from "../../hoc/withPaginationList";

import TypeItem from "./components/TypeItem";
import {StyledListGroup, StyledText} from "./styles";
import constants from "../../constants";
import {useNavigate} from "react-router-dom";
import {deleteType, getCourseType} from "../../service/courseTypeApi";
import useFetchMutation from "../../hooks/useFetchMutation";

const Empty = () => (
    <StyledText>Data Kosong...</StyledText>
)

const List = ({data, refetch}) => {
    const onNavigate = useNavigate();
    const {fetchMutation: delType} = useFetchMutation(deleteType, refetch);
    const onNavigateToEdit = (typeName) => () => {
        onNavigate(`${constants.ROUTES.EDIT_COURSE_TYPE}/?typeName=${typeName}`);
    }

    const onDelete = (id) => () => {
        const isOk = window.confirm(("Are U sure want to delete it?"));
        if (isOk){
            delType(id);
        }
    }

    return (
        <StyledListGroup>
            {data?.map((item) => (
                <TypeItem
                    data={item}
                    key={item.courseTypeId}
                    onNavigateToEdit={onNavigateToEdit(item.typeName)}
                    onDelete={onDelete(item.courseTypeId)}
                />
            ))}
        </StyledListGroup>
    )
}

export default withPaginationList(List, {
    label: "Course Type",
    navAdd: constants.ROUTES.ADD_COURSE_TYPE,
    query: getCourseType
});
