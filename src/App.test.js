import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  let component;

  beforeEach(() => {
    render(<App />);
    component = screen;
  });

  test('renders App', () => {
    // Arrange
    const app = component.getByRole("application");

    // Act
    // Assert
    expect(app).toBeInTheDocument();
  });

  test('renders Header', () => {
    // Arrange
    const header = component.getByRole("banner");
    // Act
    // Assert
    expect(header).toBeInTheDocument();
  });

  test('renders Search', () => {
    // Arrange
    const search = component.getByRole("search");
    // Act
    // Assert
    expect(search).toBeInTheDocument();
  });

  test('renders Results', () => {
    // Arrange
    const results = component.getByRole("list");
    // Act
    // Assert
    expect(results).toBeInTheDocument();
  });
});
