import React from "react";
import {getCourseById} from "../../service/courseApi"
import {editCourse} from "../../store/action/courseAction";
import constants from "../../constants";
import {FormInput, StyledContainer} from "../../components";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";

const initialData = {
    title: "",
    description: "",
    courseType:{
        courseTypeId: "",
        typeName: "",
    },
    file: null,
    duration: "",
    level: ""

}

const EditCourse = ({editCourse}) => {
    const [data, setData] = React.useState(initialData);
    const onNavigate = useNavigate();
    const params = useParams();
    // const param = useLocation(params);
    React.useEffect(() => {
        const course = getCourseById(params.courseId);

        course.duration = course.courseInfo.duration;
        course.level = course.courseInfo.level;

        setData(course);
    }, [params.courseId])

    const handleChange = (name) => (e) => {
        setData((prevData) => ({
            ...prevData,
            [name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            courseId: params.courseId,
            ...data,
            courseInfo:{
                duration:data.duration,
                level:data.level
            },
        };
        delete payload.file;
        delete payload.courseTypeId;

        editCourse(payload)
        onNavigate(constants.ROUTES.COURSE_LIST)
    }

    const handleCancel = (e) => {
        e.preventDefault();
        onNavigate(constants.ROUTES.COURSE_LIST)
    }

    return (
        <StyledContainer>
            <Form>
                <FormInput
                    label={"Title"}
                    type={"text"}
                    placeholder={"Enter title"}
                    value={data.title}
                    onChange={handleChange("title")}/>
                <FormInput
                    label={"Description"}
                    type={"textarea"}
                    placeholder={"Enter description"}
                    value={data.description}
                    onChange={handleChange("description")}/>
                <FormInput
                    label={"Course Type Id"}
                    type={"text"}
                    placeholder={"Enter course type"}
                    value={data.courseType.courseTypeId}
                    disabled={true}/>
                <FormInput
                    label={"Course Material"}
                    type={"file"}
                    id={"file"}
                    disabled={true}/>
                <FormInput
                    label={"Duration"}
                    type={"text"}
                    placeholder={"Enter duration"}
                    value={data.duration}
                    onChange={handleChange("duration")}/>
                <FormInput
                    label={"Level"}
                    type={"text"}
                    placeholder={"Enter level"}
                    value={data.level}
                    onChange={handleChange("level")}/>

                <ButtonGroup size={"lg"}>
                    <Button onClick={handleSubmit} variant={"success"}>Update</Button>
                    <Button onClick={handleCancel} variant={"danger"}>Cancel</Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )

}

const mapDispacthToProps = (dispatch) => {
    return{
    editCourse: (data) => dispatch(editCourse(data))
    }
}

export default connect(null, mapDispacthToProps)(EditCourse);