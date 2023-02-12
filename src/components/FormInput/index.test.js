import {render} from "@testing-library/react";

import FormInput from "./index";

test("should render FormInput correctly",()=>{
    const mockProps = {props:{
        type: "text"
        }}
    const { asFragment } = render(<FormInput {...mockProps}/>);

    expect(asFragment()).toMatchSnapshot();
})