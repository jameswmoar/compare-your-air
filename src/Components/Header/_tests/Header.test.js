import { render, screen } from "@testing-library/react";
import * as constants from "../../../Constants/Constants";
import Header from "../Header";

describe("Header", () => {
    let component;

    beforeEach(() => {
        render(<Header />)
        component = screen;
    });

    test("should render component", () => {
        //Arrange
        // Act
        // Assert
        expect(component).toBeTruthy();
    });

    test("should render header", () => {
        //Arrange
        const header = component.getByRole("banner");
        
        // Act
        // Assert
        expect(header).toBeInTheDocument();
    });

    test("should render title field", () => {
        //Arrange
        const title = component.getByText(constants.title);

        // Act
        // Assert
        expect(title).toBeInTheDocument();
        expect(title).toHaveClass("title");
    });

    test("should render subtitle field", () => {
        //Arrange
        const subtitle = component.getByText(constants.Subtitle);

        // Act
        // Assert
        expect(subtitle).toBeInTheDocument();
        expect(subtitle).toHaveClass("text");

    });

    test("should render cta field", () => {
        //Arrange
        const cta = component.getByText(constants.cta);

        // Act
        // Assert
        expect(cta).toBeInTheDocument();
        expect(cta).toHaveClass("text");
    });
})
