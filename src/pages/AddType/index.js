import useTypeCourse from "./useTypeCourse";
import {StyledTitle} from "../AddCourse/styles";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import {FormInput, StyledContainer} from "../../components";
import React from "react";

const FORM_LIST = [
    {id: "typeName", label: "Course Type Name", type: "text", placeholder: "Enter course type"}
]

const AddType = ({onNavigate, setTypeName}) => {
    const {getter, setter} = useTypeCourse();

    const handleSubmit = () => {
        setTypeName((prevState) => {
            const newType = {...prevState};
            const payload = {
                ...getter,
                courseTypeId: Math.random().toString()
            }
            newType?.data?.push(payload);
            return newType;
        })

        onNavigate("/course-type")
    }

    console.log(getter)

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
                    <Button variant="success" onClick={handleSubmit} disabled={getter.isDisable}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={() => onNavigate("/course-type")}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

export default AddType;