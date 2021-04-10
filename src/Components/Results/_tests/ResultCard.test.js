import { render, screen } from "@testing-library/react";
import * as constants from "../../../Constants/Constants";
import Loading from "../../Loading/Loading";
import ResultCard from "../ResultCard";

describe("ResultCard", () => {
    const closeResult = jest.fn()

    const loadingProps = {
        result: { loading: true },
        closeResult,
    };

    const errorProps = {
        result: { error: true },
        closeResult,
    };

    const testResult = {
        lastUpdated: "3 hours ago",
        location: "Manchester Piccadilly",
        city: "in Manchester",
        values: "Values: O2: 12",
    }

    const testProps = {
        result: testResult,
        id: 1,
        closeResult,
    };

    describe("When loading", () => {
        test("should render loading component", () => {
            //Arrange
            render(<ResultCard {...loadingProps} />)
            const loadingText = screen.getByText(constants.loadingText);
    
            // Act
            // Assert
            expect(loadingText).toBeInTheDocument();
        });
    });

    describe("When errored", () => {
        test("should render error component", () => {
            //Arrange
            render(<ResultCard {...errorProps} />)
            const errorText = screen.getByText(constants.errorText);
    
            // Act
            // Assert
            expect(errorText).toBeInTheDocument();
        });
    })

    describe("When rendering a result", () => {
        beforeEach(() => {
            render(<ResultCard {...testProps} />)
        });

        test("should render last updated", () => {
            //Arrange
            const lastUpdatedText = screen.getByText(testResult.lastUpdated);
    
            // Act
            // Assert
            expect(lastUpdatedText).toBeInTheDocument();
        });

        test("should render location", () => {
            //Arrange
            const locationText = screen.getByText(testResult.location);
    
            // Act
            // Assert
            expect(locationText).toBeInTheDocument();
        });

        test("should render city", () => {
            //Arrange
            const cityText = screen.getByText(testResult.city);
    
            // Act
            // Assert
            expect(cityText).toBeInTheDocument();
        });

        test("should render values", () => {
            //Arrange
            const valuesText = screen.getByText(testResult.values);
    
            // Act
            // Assert
            expect(valuesText).toBeInTheDocument();
        });

        test("should render closeButton", () => {
            //Arrange
            const button = screen.getByRole("button");
    
            // Act
            // Assert
            expect(button).toBeInTheDocument();
        });

        test("should render call closeResult on clicking closeButton", () => {
            //Arrange
            const button = screen.getByRole("button");
    
            // Act
            button.click()

            // Assert
            expect(closeResult).toHaveBeenCalledTimes(1);
        });
    })
})