import {getCourseTypeById} from "../../service/courseApi";
import constants from "../../constants";
import {FormInput, StyledContainer} from "../../components";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import React from "react";
import {editCourseType} from "../../store/action/courseTypeAction";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";

const initialData = {
    typeName: ""
}

const EditType = ({editCourseType}) => {
    const [data, setData] = React.useState(initialData);
    const onNavigate = useNavigate();
    const param = useParams();
    React.useEffect(()=>{
        const courseType = getCourseTypeById(param.id);
        setData(courseType);
    }, [param.id])

    const handleChange = (name) => (e) => {
        setData((prevData)=>({
            ...prevData,
            [name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            courseTypeId: param.id,
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

