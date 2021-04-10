import { render, screen, fireEvent } from "@testing-library/react";
import * as constants from "../../../Constants/Constants";
import Search from "../Search";

const handleResult = jest.fn();
const setResultLoading = jest.fn();

describe("Search", () => {
    let component;

    const testProps = {
        handleResult,
        setResultLoading,
    }

    beforeEach(() => {
        render(<Search {...testProps} />)
        component = screen;
      });

    test("should render component", () => {
        //Arrange
        // Act
        // Assert
        expect(component).toBeTruthy();
    });

    test("should render search section", () => {
        //Arrange
        const searchField = component.getByRole("search");

        // Act        
        // Assert
        expect(searchField).toBeInTheDocument();
    });

    test("should render search icon", () => {
        //Arrange
        const searchField = component.getByRole("img");

        // Act        
        // Assert
        expect(searchField).toBeInTheDocument();
    });

    test("should render search field with placeholder", () => {
        //Arrange
        const searchField = component.getByRole("searchbox");

        // Act
        // Assert
        expect(searchField).toBeInTheDocument();
        expect(searchField.placeholder).toBe(constants.searchBarPlaceholder); 
    });

    test("should update search field on change event", () => {
        //Arrange
        const searchField = component.getByRole("searchbox");

        // Act
        fireEvent.change(searchField, { target: { value: "Manchester" } })
        
        // Assert
        expect(searchField.value).toBe("Manchester");
    });

    test("should call setResultLoading method on submission", () => {
        //Arrange
        const searchField = component.getByRole("searchbox");

        // Act
        fireEvent.change(searchField, { target: { value: "Manchester" } })
        const form = component.getByRole("searchForm");
        form.submit();
        
        // Assert
        expect(setResultLoading).toHaveBeenCalledTimes(1);
    });
})
