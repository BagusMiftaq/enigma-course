import React from "react";

import {StyledListGroup, StyledText} from "./styles";
import CourseItem from "./components/CourseItem";

import withPaginationList from "../../hoc/withPaginationList";
import constants from "../../constants";
import {deleteCourse, downloadCourse} from "../../service/courseApi";
import {useNavigate, useParams} from "react-router-dom";
import {getCourses} from "../../service/courseApi";
import useFetchMutation from "../../hooks/useFetchMutation";

const Empty = () => (
    <StyledText>Data Kosong...</StyledText>
)

const List = ({data, refetch}) => {
    const onNavigate = useNavigate();
    const {fetchMutation: delCourse} = useFetchMutation(deleteCourse, refetch);
    const onNavigateToEdit = (id) => () => {
        onNavigate(`${constants.ROUTES.EDIT_COURSE}/${id}`);
        // console.log("Routes",`${constants.ROUTES.EDIT_COURSE}/${id}`)
    }

    const onDelete = (id)=> () => {
        const  isOk= window.confirm("Are U sure want to delete it?");
        if(isOk){
            delCourse(id);
        }

    }

    const onDownload = (fileLink) => (e) => {
        e.preventDefault();
        console.log("File", fileLink);

        const pathArr = fileLink?.split("/");
        const filename =pathArr[pathArr.length-1];
        console.log(filename)

        downloadCourse(filename);
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
                        onDowload={onDownload(item.link)}
                    />
                ))}
            </StyledListGroup>
        </>
    )
}

export default withPaginationList(List, {
    label : "Course List",
    navAdd : constants.ROUTES.ADD_COURSE,
    query: getCourses
});
