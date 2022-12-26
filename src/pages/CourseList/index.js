import {StyledListGroup, StyledText} from "./styles";
import CourseItem from "./components/CourseItem";
import {Button, ButtonGroup} from "react-bootstrap";
import React from "react";
import {StyledContainer} from "../../components";


const Empty = () => (
    <StyledText>Data Kosong...</StyledText>
)

const List = ({data, onDelete}) => {
    return (
        <StyledListGroup>
            {data?.map((item, index) => (
                <CourseItem data={item} key={item.courseId} onDelete={onDelete}/>
            ))}
        </StyledListGroup>
    )
}

const courseList = {
    data: [
        {
            "courseId": "ec825c50-a5b8-47ff-8eca-356c1cef5aa8",
            "title": "Angular Advanced",
            "description": "Library for Frontend from Google Inc",
            "link": "D:\\LEARNING\\java\\restapi-demo\\assets\\implementasi ERD.png",
            "courseInfo": {
                "courseInfoId": "5aa2634e-efeb-4afd-8b70-68d789170ff9",
                "duration": "7 Hari",
                "level": "BASIC"
            },
            "courseType": {
                "courseTypeId": "f639b9f5-1235-434e-b1f9-6024c1b88551",
                "typeName": "FRONTEND"
            }
        },
        {
            "courseId": "870fdd50-ce3b-4838-87e3-49e33521a6f1",
            "title": "React Fundamental",
            "description": "Library for Frontend",
            "link": "D:\\LEARNING\\java\\restapi-demo\\assets\\deferFunc.png",
            "courseInfo": {
                "courseInfoId": "2cf8b506-d680-43e1-9e44-68880aadecf1",
                "duration": "6 Hari",
                "level": "BASIC"
            },
            "courseType": {
                "courseTypeId": "f639b9f5-1235-434e-b1f9-6024c1b88551",
                "typeName": "FRONTEND"
            }
        },
        {
            "courseId": "69bb6e62-13e3-4cf8-a72b-21ee357bd0da",
            "title": "React Advanced 2",
            "description": "Library for Frontend",
            "link": "D:\\LEARNING\\java\\restapi-demo\\assets\\Screenshot 2022-10-05 122456.png",
            "courseInfo": {
                "courseInfoId": "f95995dc-bc95-49c9-8871-adb09f6128d3",
                "duration": "10 Hari",
                "level": "MIDDLE"
            },
            "courseType": {
                "courseTypeId": "f639b9f5-1235-434e-b1f9-6024c1b88551",
                "typeName": "FRONTEND"
            }
        },
        {
            "courseId": "65f37546-adaf-48a5-8ebe-d50b82320c64",
            "title": "React Advanced 1",
            "description": "Library for Frontend",
            "link": "D:\\LEARNING\\java\\restapi-demo\\assets\\Intro ERD.png",
            "courseInfo": {
                "courseInfoId": "4d65706c-8b9a-408f-9eed-1b13cf647e39",
                "duration": "10 Hari",
                "level": "MIDDLE"
            },
            "courseType": {
                "courseTypeId": "f639b9f5-1235-434e-b1f9-6024c1b88551",
                "typeName": "FRONTEND"
            }
        },
        {
            "courseId": "57f5904f-fc0d-4478-8188-7af724f1dd59",
            "title": "Angular Fundamental",
            "description": "Library for Frontend from Google",
            "link": "D:\\LEARNING\\java\\restapi-demo\\assets\\1. Pengenalan DBMS.png",
            "courseInfo": {
                "courseInfoId": "a3a0a6d2-74eb-469c-b769-288865aff92b",
                "duration": "10",
                "level": "INTERMEDIATE"
            },
            "courseType": {
                "courseTypeId": "f639b9f5-1235-434e-b1f9-6024c1b88551",
                "typeName": "FRONTEND"
            }
        }
    ],
    "count": 5,
    "totalPage": 2,
    "page": 1,
    "size": 3
}

const CourseList = ({onNavigate}) => {

    const [courses, setData] = React.useState(courseList);

    const [size, setSize] = React.useState(3);

    const [page, setPage] = React.useState(1);

    const [count, setCount] = React.useState(courses.data.length)

    const [maxPage, setMaxPage] = React.useState(Math.ceil(count / size));

    let arr = [];

    function Forward() {
        setPage(prevState => prevState + 1);
    }

    function Backward() {
        setPage(prevState => prevState - 1);
    }

    function Pagination({onDelete}) {
        if (count > 0) {
            arr = courses.data.slice((page - 1) * size, (page - 1) * size + size);

            return <List data={arr} onDelete={onDelete}/>
        } else {
            return <Empty/>
        }
    }

    function onDelete(id) {
        setData({...courses, data: courses.data.filter(c => c.courseId !== id)})
    }

    return (
        <StyledContainer>
            <div className={"d-flex justify-content-between"}>
                <Button variant={"success"} onClick={() => onNavigate("/add-course")}>Add Course</Button>
                <ButtonGroup className={"d-flex justify-content-between"}>
                    <Button onClick={Backward} disabled={page === 1}>{`<<`}</Button>
                    <Button onClick={Forward} disabled={page === maxPage}>{`>>`} </Button>
                </ButtonGroup>
            </div>

            {Pagination({onDelete})}
        </StyledContainer>
    )
}

export default CourseList;