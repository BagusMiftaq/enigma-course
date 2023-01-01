import {getCourseTypeById} from "../../service/courseApi";
import constants from "../../constants";
import {FormInput, StyledContainer} from "../../components";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import React from "react";
import {editCourseType} from "../../store/action/courseTypeAction";
import {connect} from "react-redux";

const initialData = {
    typeName: ""
}

const EditType = ({onNavigate, params, editCourseType}) => {
    const [data, setData] = React.useState(initialData);
    React.useEffect(()=>{
        const courseType = getCourseTypeById(params.id);
        setData(courseType);
    }, [params.id])

    const handleChange = (name) => (e) => {
        setData((prevData)=>({
            ...prevData,
            [name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            courseTypeId: params.id,
            ...data
        };

        editCourseType(payload)
        onNavigate(constants.ROUTES.COURSE_TYPE)
    }

    const handleCancel = (e) => {
        e.preventDefault();
        onNavigate(constants.ROUTES.COURSE_TYPE)
    }

    return(
        <StyledContainer>
            <Form>
                <FormInput
                    label={"Course Type Name"}
                    type={"text"}
                    placeholder={"Enter Course Type Name"}
                    value={data.typeName}
                    onChange={handleChange("typeName")}
                />
                <ButtonGroup size={"lg"}>
                    <Button onClick={handleSubmit} variant={"success"}>Update</Button>
                    <Button onClick={handleCancel} variant={"danger"}>Cancel</Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        editCourseType: (data) => dispatch(editCourseType(data))
    }
}

export default connect(null, mapDispatchToProps)(EditType);

