import React from "react";

import typeList from "../../fixtures/courseType.json";
import withPaginationList from "../../hoc/withPaginationList";

import TypeItem from "./components/TypeItem";
import {connect, useDispatch} from "react-redux";
import {StyledListGroup, StyledText} from "./styles";
import constants from "../../constants";
import {deleteCourseType} from "../../store/action/courseTypeAction";

const Empty = () => (
    <StyledText>Data Kosong...</StyledText>
)

const List = ({data, onNavigate}) => {

    const dispacth = useDispatch();

    const onNavigateToEdit = (id) => () => {
        onNavigate(constants.ROUTES.EDIT_COURSE_TYPE, {id});
    }

    const onDelete = (id) => () => {
        const isOk = window.confirm(("Are u sure want to delete it?"));
        if (isOk){
            dispacth(deleteCourseType(id))
        }
    }

    return (
        <StyledListGroup>
            {data?.map((item) => (
                <TypeItem
                    data={item}
                    key={item.courseTypeId}
                    onNavigateToEdit={onNavigateToEdit(item.courseTypeId)}
                    onDelete={onDelete(item.courseTypeId)}
                />
            ))}
        </StyledListGroup>
    )
}

const mapStateToProps = state => ({
    listData : state.coursesType.typeList,
    pagination: state.coursesType.pagination
})

export default connect(mapStateToProps, null) (withPaginationList(List, {
    label: "Course Type",
    navAdd: "/add-course-type",
}));
