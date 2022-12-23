import React from "react";
import {
    Form, Container
} from "react-bootstrap";
import styled from "styled-components";
import FormInput from "../../components/FormInput";


const StyledContainer = styled(Container)`
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: left;
`
const FORM_LIST = [
    {label:"Title", type:"text", placeholder:"Enter course title"},
    {label:"Description", type:"textarea", placeholder:"Enter course description"},
    {label:"Type Course ID", type:"text", placeholder:"Enter course type Id"},
    {label:"Course Material", type:"file", placeholder:"Enter course file"},
    {label:"Level", type:"text", placeholder:"Enter course level"},
    {label:"Duration", type:"text", placeholder:"Enter course duration"},

]

const AddCourse = () =>{

    const[title, setTitle]=React.useState("");
    const[description, setDescription]=React.useState("");
    const[typeId, setTypeId]=React.useState("");
    const[file, setFile]=React.useState("");
    const[level, setLevel]=React.useState("");
    const[duration, setDuration]=React.useState("");

    const state = [title,description, typeId, file, level, duration];
    const setState = [setTitle, setDescription, setTypeId, setFile, setLevel, setDuration];
    console.log(title)
    return(
        <StyledContainer>
        <Form>
            {FORM_LIST.map((item, index) => 
                (
                    <FormInput
                    key={index}
                    label={item.label}
                    type={item.type}
                    value={state[index]}
                    onChange={setState[index]}
                    placeholder={item.placeholder}
                    />
                )
        
            )}
        </Form>
        </StyledContainer>
    )
}

export default AddCourse;