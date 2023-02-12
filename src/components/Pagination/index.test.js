import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Pagination from "./index";

describe('Pagination Component', ()=> {
    describe("Previous", ()=>{
        test("should call onChangeCurrentPage when current page is not 1", ()=>{
            const mockOnChange = jest.fn();
            render(<Pagination
                    totalPage = {5}
                    currentPage ={2}
                    onChangeCurrentPage ={mockOnChange}
                />
            )

            const previousElemetn = screen.getByText("Previous");
            userEvent.click(previousElemetn);

            expect(mockOnChange).toHaveBeenCalledWith(2-1);
        })

        test("should call onChangeCurrentPage when current page is 1",()=>{
            const mockOnChange = jest.fn();
            render(
                <Pagination
                    totalPage = {5}
                    currentPage ={1}
                    onChangeCurrentPage ={mockOnChange}
                />
            )

            const previousElement = screen.getByText("Previous");
            userEvent.click(previousElement);

            expect(mockOnChange).not.toHaveBeenCalledWith(1-1);
        })
    })

    describe("NextPage",()=>{
        test("should call onChangeCurrentPage when current page is not total page", ()=>{
            const mockOnChange = jest.fn();
            render(
                <Pagination
                    totalPage = {5}
                    currentPage ={1}
                    onChangeCurrentPage ={mockOnChange}
                />
            )

            const nextElement = screen.getByText("Next")
            userEvent.click(nextElement);

            expect(mockOnChange).toHaveBeenCalledWith(1+1);
        })
        test("should not call onChangeCurrentPage when current page is total page", ()=>{
            const mockOnChange = jest.fn();
            render(
                <Pagination
                    totalPage = {5}
                    currentPage ={5}
                    onChangeCurrentPage ={mockOnChange}
                />
            )

            const nextElement = screen.getByText("Next")
            userEvent.click(nextElement);

            expect(mockOnChange).not.toHaveBeenCalledWith(5+1);
        })
    })

    describe('Index', ()=> {
        test("should call onChangeCurrentPage when current page is not index page", ()=>{
            const mockOnChange = jest.fn();
            render(
                <Pagination
                    totalPage = {5}
                    currentPage ={5}
                    onChangeCurrentPage ={mockOnChange}
                />
            )

            const indexElement = screen.getByText(4)
            userEvent.click(indexElement);

            expect(mockOnChange).toHaveBeenCalledWith(4);
        })
        test("should not call onChangeCurrentPage when current page is still the same", ()=>{
            const mockOnChange = jest.fn();
            render(
                <Pagination
                    totalPage = {5}
                    currentPage ={5}
                    onChangeCurrentPage ={mockOnChange}
                />
            )

            const nextElement = screen.getByText(5)
            userEvent.click(nextElement);

            expect(mockOnChange).not.toHaveBeenCalledWith(5);
        })
    });
});