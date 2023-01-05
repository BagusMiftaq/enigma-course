import {getCourseTypeByName, updateType} from "../../service/courseTypeApi";
import constants from "../../constants";
import {FormInput, StyledContainer} from "../../components";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import React from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import useFetchQuery from "../../hooks/useFetchQuery";
import useFetchMutation from "../../hooks/useFetchMutation";

const initialData = {
    typeName: ""
}

const EditType = () => {
    const [data, setData] = React.useState(initialData);
    const onNavigate = useNavigate();
    const [param] = useSearchParams();
    const {data:courseTypeData} = useFetchQuery(getCourseTypeByName, param.get('typeName'));
    const {fetchMutation: updateCourseTypeMutation} = useFetchMutation(
        updateType, ()=>onNavigate(constants.ROUTES.COURSE_TYPE)
    )

    console.log(courseTypeData);
    React.useEffect(()=>{
        const courseType = {
            courseTypeId: courseTypeData?.data?.[0].courseTypeId,
            typeName: courseTypeData?.data?.[0].typeName
        }
        setData(courseType);
        console.log(courseType);
    }, [courseTypeData])
    const handleChange = (name) => (e) => {
        setData((prevData)=>({
            ...prevData,
            [name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            ...data
        };

        updateCourseTypeMutation(payload)
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

export default EditType;

