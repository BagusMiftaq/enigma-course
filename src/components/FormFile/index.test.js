import {render} from "@testing-library/react";

import FormFile from "./index";

test("Should render FormFile correctly", ()=>{
    const mockProps = {label: "this is label", placeholder: "this is placeholder",
                        value: "this is value", onChange: ()=>{}, disabled: false,
                        id : "id"}

    const {asFragment} = render(<FormFile {...mockProps}/>);

    expect(asFragment()).toMatchSnapshot();
})