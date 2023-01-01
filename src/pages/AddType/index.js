import useTypeCourse from "./useTypeCourse";
import {StyledTitle} from "../AddCourse/styles";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import {FormInput, StyledContainer} from "../../components";
import React from "react";
import {connect, useDispatch} from "react-redux";
import {addCourseType} from "../../store/action/courseTypeAction";
import constants from "../../constants";

const FORM_LIST = [
    {id: "typeName", label: "Course Type Name", type: "text", placeholder: "Enter course type"}
]

const AddType = ({addCourseType,onNavigate}) => {
    const {getter, setter} = useTypeCourse();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        addCourseType(getter)
        onNavigate(constants.ROUTES.COURSE_TYPE)
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
                    <Button variant="secondary" onClick={() => onNavigate(constants.ROUTES.COURSE_TYPE)}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addCourseType: courseType => dispatch(addCourseType(courseType))
})

export default connect(null, mapDispatchToProps) (AddType);