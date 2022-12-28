import React from "react";
import {getCourseById} from "../../services/courseApi";
import {editCourse} from "../../store/action/courseAction";

const initialData = {
    title : "",
    description : "",
    typeId : "",
    file: null,
    duration: "",
    level: ""
}

const EditCourse = ({onNavigate, params, editCourse}) => {
    const [data, setData] = React.useState(initialData);
    React.useEffect(()=>{
        const course = getCourseById(param.id);
        setData(course);
    }, [params.id])
}