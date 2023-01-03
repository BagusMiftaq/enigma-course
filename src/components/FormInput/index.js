import {FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {Component} from "react";
import {FormFile, FormText} from "../index";


const FormInput = (
    props
) => {
    let Component;
    switch (props.type){
        case "file":
            Component = FormFile
            break;
        default:
            Component = FormText
            break;
    }

    return (
        <Component {...props}/>
    )
}

export default FormInput;
