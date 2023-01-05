import React from "react";
import {getCourseById, updateCourse} from "../../service/courseApi"
import constants from "../../constants";
import {FormInput, StyledContainer, FormSelect, FormFile} from "../../components";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import useFetchQuery from "../../hooks/useFetchQuery";
import {getCourseType} from "../../service/courseTypeApi";
import useFetchMutation from "../../hooks/useFetchMutation";

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

const EditCourse = () => {
    const [course, setCourse] = React.useState(initialData);
    const onNavigate = useNavigate();
    const params = useParams();
    const {data: courseResponse} = useFetchQuery(getCourseById, params.courseId)
    const {data: courseTypeData} = useFetchQuery(getCourseType);
    const {fetchMutation: updateCourseMutation} = useFetchMutation(
        updateCourse,()=>onNavigate(constants.ROUTES.COURSE_LIST));

    React.useEffect(() => {
        const currentCourse = {
            courseId: courseResponse?.data?.courseId,
            title: courseResponse?.data?.title,
            description: courseResponse?.data?.description,
            courseFile: courseResponse?.data?.link,
            courseTypeId: courseResponse?.data?.courseType?.courseTypeId,
            level: courseResponse?.data?.courseInfo?.level,
            duration: courseResponse?.data?.courseInfo.duration
        }
        setCourse(currentCourse);
    }, [courseResponse])

    const handleChange = (name) => (e) => {
        setCourse((prevData) => ({
            ...prevData,
            [name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            courseId: params.courseId,
            ...course,

        };
        delete payload.file;

       updateCourseMutation(payload)

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
                    value={course?.title}
                    onChange={handleChange("title")}/>
                <FormInput
                    label={"Description"}
                    type={"textarea"}
                    placeholder={"Enter description"}
                    value={course?.description}
                    onChange={handleChange("description")}/>
                <FormInput
                    label={"Duration"}
                    type={"text"}
                    placeholder={"Enter duration"}
                    value={course?.duration}
                    onChange={handleChange("duration")}/>
                <FormInput
                    label={"Level"}
                    type={"text"}
                    placeholder={"Enter level"}
                    value={course?.level}
                    onChange={handleChange("level")}/>
                <FormFile
                    label={"Course Material"}
                    placeholder={"Choose course material"}
                    disabled
                    value={course?.courseFile}
                />
                <FormSelect
                    label={"Course Type Id"}
                    placeholder={"Select course type"}
                    onChange={handleChange("courseTypeId")}
                    values={courseTypeData?.data?.map((item)=>({
                            id : item.courseTypeId,
                            label : item.typeName
                        }
                    ))}
                    value={course?.courseTypeId}
                />

                <ButtonGroup size={"lg"}>
                    <Button onClick={handleSubmit} variant={"success"}>Update</Button>
                    <Button onClick={handleCancel} variant={"danger"}>Cancel</Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )

}
export default EditCourse;