import App from "../app.js";
import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'


describe ('testing the App component', () => {
  test('App renders data from the form after submission', () => {
    render(<App />);

    const button = screen.getByTestId('form');

    fireEvent.click(button);

    const renderedOutput = screen.getByTestId('results');

    expect(renderedOutput).toHaveTextContent('results');
  })
})