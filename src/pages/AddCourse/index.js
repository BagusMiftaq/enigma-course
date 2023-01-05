import React from 'react';
import {
    Form, Button, ButtonGroup
} from "react-bootstrap";
import {FormInput, FormSelect, StyledContainer} from "../../components";

import {StyledTitle} from "./styles";
import useAddCourse from "./useAddCourse";
import {addCourse} from "../../service/courseApi";
import {connect, useDispatch} from "react-redux";
import constants from "../../constants";
import {useNavigate} from "react-router-dom";
import useFetchMutation from "../../hooks/useFetchMutation";
import useFetchQuery from "../../hooks/useFetchQuery";
import {getCourseType} from "../../service/courseTypeApi";

const FORM_LIST = [
    {id: "title", label: "Title", type: "text", placeholder: "Enter course title"},
    {id: "description", label: "Description", type: "textarea", placeholder: "Enter course description"},
    {id: "courseFile", label: "Course Material", type: "file", placeholder: "Choose course material"},
    {id: "level", label: "Level", type: "text", placeholder: "Enter course level"},
    {id: "duration", label: "Duration", type: "text", placeholder: "Enter course duration"}
]

const AddCourse = () => {
    const {getter, setter} = useAddCourse();
    const onNavigate = useNavigate();
    const {fetchMutation,loading} = useFetchMutation(addCourse, ()=> onNavigate(constants.ROUTES.COURSE_LIST));

    const {data: courseTypeData} = useFetchQuery(getCourseType);

    // console.log("NIH",courseTypeData)

    const handleSubmit = () => {
        const payload = new FormData();
        payload.append("title", getter.title);
        payload.append("description", getter.description);
        payload.append("courseTypeId", getter.courseTypeId);
        payload.append("file", getter.courseFile);
        payload.append("duration", getter.duration);
        payload.append("level", getter.level);

        fetchMutation(payload)

    }


    return (
        <StyledContainer>
            <StyledTitle>Add Course</StyledTitle>
            <Form>
                {FORM_LIST.map(item => (
                    <FormInput
                        label={item.label}
                        type={item.type}
                        value={getter[item.id]}
                        onChange={setter[item.id]}
                        placeholder={item.placeholder}
                        key={item.id}
                    />
                ))}
                <FormSelect
                    label={"Course Type"}
                    placeholder={"Select course type"}
                    onChange={setter.courseTypeId}
                    value={getter.courseTypeId}
                    values={courseTypeData?.data?.map((item)=>({
                            id : item.courseTypeId,
                            label : item.typeName
                        }
                    ))}

                />
                <ButtonGroup>
                    <Button variant="success" onClick={handleSubmit} disabled={getter.isDisable || loading}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={() => onNavigate(constants.ROUTES.COURSE_LIST)}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

export default AddCourse;
