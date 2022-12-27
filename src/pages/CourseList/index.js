import React from "react";
import {Button} from "react-bootstrap";

import {StyledListGroup, StyledText} from "./styles";
import CourseItem from "./components/CourseItem";

import courseList from "../../fixtures/courseList.json";

import {StyledContainer, Pagination} from "../../components";
import withPaginationList from "../../hoc/withPaginationList";

const Empty = () => (
    <StyledText>Data Kosong...</StyledText>
)

const List = ({data}) => {
    return (
        <>
            <StyledListGroup>
                {data?.map((item) => (
                    <CourseItem data={item} key={item?.courseId} />
                ))}
            </StyledListGroup>
        </>
    )
}

export default withPaginationList(List, {
    listData: courseList,
    label : "Course List",
    navAdd : "/add-course"
});
