import {render} from "@testing-library/react";

import FormText from "./index";

test("Should render FormText correctly", ()=>{
    const mockProps = {label: "this is label", type: "text", placeholder: "this is placeholder",
        value:{obj:""}, onChange: ()=>{}, disabled: false}

    const {asFragment} = render(<FormText {...mockProps}/>);

    expect(asFragment()).toMatchSnapshot();
})

test("Should render FormText correctly", ()=>{
    const mockProps = {label: "this is label", type: "textarea", placeholder: "this is placeholder",
        value:{obj:""}, onChange: ()=>{}, disabled: false}

    const {asFragment} = render(<FormText {...mockProps}/>);

    expect(asFragment()).toMatchSnapshot();
})