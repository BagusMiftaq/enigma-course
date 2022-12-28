import React from "react";

import typeList from "../../fixtures/courseType.json";
import withPaginationList from "../../hoc/withPaginationList";

import {StyledListGroup} from "./styles";
import TypeItem from "./components/TypeItem";
import {connect, useDispatch} from "react-redux";
import {StyledText} from "../CourseList/styles";

const Empty = () => (
    <StyledText>Data Kosong...</StyledText>
)

const List = ({data}) => {

    const dispacth = useDispatch();

    return (
        <StyledListGroup>
            {data?.map((item) => (
                <TypeItem data={item} key={item.courseTypeId} />
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
