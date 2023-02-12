import {render} from "@testing-library/react";

import EmptyState from "./index";

test("should render empty state component correctly", ()=>{
    const mockProps = {text: "List is empty"};
    const { asFragment } = render(<EmptyState {...mockProps}/>);

    expect(asFragment()).toMatchSnapshot();
})