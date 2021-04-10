import { render, screen } from "@testing-library/react";
import * as constants from "../../../Constants/Constants";
import Results from "../Results";

describe("Matches", () => {
    let component;
    const closeResult = jest.fn()

    const noResultsProps = {
        results: [],
        closeResult,
    };

    const resultsProps = {
        results: [
            {
                lastUpdated: "3 hours ago",
                location: "Manchester Piccadilly",
                city: "in Manchester",
                values: "Values: O2: 12",
            }
        ],
        closeResult,
    }

    describe("When passed no results", () => {
        beforeEach(() => {
            render(<Results {...noResultsProps} />)
            component = screen;
        });
    
        test("should render component", () => {
            //Arrange
            // Act
            // Assert
            expect(component).toBeTruthy();
        });
    
        test("should render no results", () => {
            //Arrange
            const resultsContainer = component.getByRole("list");

            // Act
            // Assert
            expect(resultsContainer).toBeInTheDocument();
            expect(component.queryByRole("resultCard")).toBeNull();
        });
    });

    describe("When passed results", () => {
        beforeEach(() => {
            render(<Results {...resultsProps} />)
            component = screen;
        });
    
        test("should render component", () => {
            //Arrange
            // Act
            // Assert
            expect(component).toBeTruthy();
        });
    
        test("should render results", () => {
            //Arrange
            // Act
            // Assert
            expect(component.getByRole("list")).toBeInTheDocument();
            expect(component.getByRole("resultCard")).toBeInTheDocument();
        });
    });
})