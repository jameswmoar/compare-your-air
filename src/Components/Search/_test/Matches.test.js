import { render, screen } from "@testing-library/react";
import Matches from "../Matches";

describe("Matches", () => {
    let component;
    const handleMatchSelect = jest.fn();

    const testProps = {
        cities: ["Manchester"],
        handleMatchSelect,
    }

    beforeEach(() => {
        render(<Matches {...testProps} />)
        component = screen;
    });

    test("should render component", () => {
        //Arrange
        // Act
        // Assert
        expect(component).toBeTruthy();
    });

    test("should render matches field", () => {
        //Arrange
        const matches = component.getByRole("matchField");

        // Act
        // Assert
        expect(matches).toBeInTheDocument();
    });

    test("should render match", () => {
        //Arrange
        const match = component.getByRole("match");

        // Act
        // Assert
        expect(match).toBeInTheDocument();
        expect(match.value).toBe("Manchester");
    });

    test("should call handleMatchSelect on click event", () => {
        //Arrange
        const match = component.getByRole("match");

        // Act
        match.click();

        // Assert
        expect(handleMatchSelect).toHaveBeenCalledTimes(1);
    });
})