import React from "react";
import {Button} from "react-bootstrap";

import {StyledListGroup, StyledText} from "./styles";
import CourseItem from "./components/CourseItem";

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
    label : "Course List",
    navAdd : "/add-course",
    labela : "Course Type",
    navAdda : "/course-type"
});
