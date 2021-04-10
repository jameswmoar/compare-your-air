import { render, screen } from "@testing-library/react";
import * as constants from "../../../Constants/Constants";
import Loading from "../Loading";

describe("Loading", () => {
    let component;

    beforeEach(() => {
        render(<Loading />)
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
        const loadingText = component.getByText(constants.loadingText);

        // Act
        // Assert
        expect(loadingText).toBeInTheDocument();
        expect(loadingText).toHaveClass("loading");
    });
})
