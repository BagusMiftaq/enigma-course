import useTypeCourse from "./useTypeCourse";
import {StyledTitle} from "../AddCourse/styles";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import {FormInput, StyledContainer} from "../../components";
import React from "react";
import constants from "../../constants";
import {useNavigate} from "react-router-dom";
import useFetchMutation from "../../hooks/useFetchMutation";
import {addCourseType} from "../../service/courseTypeApi";

const FORM_LIST = [
    {id: "typeName", label: "Course Type Name", type: "text", placeholder: "Enter course type"}
]

const AddType = () => {
    const {getter, setter} = useTypeCourse();
    const onNavigate = useNavigate();
    const {fetchMutation, loading} = useFetchMutation(addCourseType, ()=>onNavigate(constants.ROUTES.COURSE_TYPE))

    const handleSubmit = () => {
        const payload = new FormData();
        payload.append("typeName", getter.typeName);

        fetchMutation(payload);

    }

    return (
        <StyledContainer>
            <StyledTitle>Add Course Type</StyledTitle>
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
                <ButtonGroup>
                    <Button variant="success" onClick={handleSubmit} disabled={getter.isDisable || loading}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={() => onNavigate(constants.ROUTES.COURSE_TYPE)}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

export default AddType;