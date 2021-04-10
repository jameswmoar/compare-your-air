import { render, screen } from "@testing-library/react";
import * as constants from "../../../Constants/Constants";
import Error from "../Error";

describe("Loading", () => {
    let component;

    beforeEach(() => {
        render(<Error />)
        component = screen;
    });

    test("should render component", () => {
        //Arrange
        // Act
        // Assert
        expect(component).toBeTruthy();
    });

    test("should render title field", () => {
        //Arrange
        const error = component.getByText(constants.errorText);

        // Act
        // Assert
        expect(error).toBeInTheDocument();
        expect(error).toHaveClass("error");
    });
})
