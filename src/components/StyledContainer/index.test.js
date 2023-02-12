import {render} from "@testing-library/react";

import StyledContainer from "./index";

test("should render StyledContainer correctly",()=>{
    const { asFragment } = render(<StyledContainer/>);

    expect(asFragment()).toMatchSnapshot();
})