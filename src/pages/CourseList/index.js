import React from "react";

import {StyledListGroup, StyledText} from "./styles";
import CourseItem from "./components/CourseItem";

import withPaginationList from "../../hoc/withPaginationList";
import {connect, useDispatch} from "react-redux";
import constants from "../../constants";
import {deleteCourse} from "../../store/action/courseAction";

const Empty = () => (
    <StyledText>Data Kosong...</StyledText>
)

const List = ({data, onNavigate}) => {

    const dispacth = useDispatch();

    const onNavigateToEdit = (id) => () => {
        onNavigate(constants.ROUTES.EDIT_COURSE, {id});
    }

    const onDelete = (id)=> () => {
        const  isOk= window.confirm("Are U sure want to delete it?");
        if(isOk){
            dispacth(deleteCourse(id))
        }
    }

    return (
        <>
            <StyledListGroup>
                {data?.map((item) => (
                    <CourseItem
                        data={item}
                        key={item?.courseId}
                        onNavigateToEdit={onNavigateToEdit(item.courseId)}
                        onDelete={onDelete(item.courseId)}
                    />
                ))}
            </StyledListGroup>
        </>
    )
}

const mapStateToProps = state => ({
    listData : state.courses.courseList,
    pagination: state.courses.pagination
})

export default connect(mapStateToProps, null) (withPaginationList(List, {
    label : "Course List",
    navAdd : "/add-course"
}));
