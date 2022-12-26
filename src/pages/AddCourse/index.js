import React from "react";
import {Form} from "react-bootstrap";
import FormInput from "../../components/FormInput";
import StyledContainer, {StyledTitle} from "./styles";
import useAddCourseState from "./useAddCourseState";

const FORM_LIST = [
    {
        label: "Title", type: "text", placeholder: "Enter course title"
    },
    {
        label: "Description",
        type: "textarea",
        placeholder: "Enter course description",
    },
    {
        label: "Type Course ID",
        type: "text",
        placeholder: "Enter course type Id",
    },
    {label: "Course Material", type: "file", placeholder: "Enter course file"},
    {label: "Level", type: "text", placeholder: "Enter course level"},
    {label: "Duration", type: "text", placeholder: "Enter course duration"},
];

const AddCourse = () => {
    const [getter, setter] = useAddCourseState();

    return (
        <StyledContainer>
            <StyledTitle>Add Course</StyledTitle>
            <Form>
                {FORM_LIST.map((item, index) => (
                    <FormInput
                        label={item.label}
                        type={item.type}
                        value={getter[index]}
                        onChange={setter[index]}
                        placeholder={item.placeholder}
                    />
                ))}
            </Form>
        </StyledContainer>
    );
};

export default AddCourse;
