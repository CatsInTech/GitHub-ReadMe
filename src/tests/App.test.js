import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the app", () => {
  render(<App />);
  const linkElement = screen.getByText(/app/i);
  expect(linkElement).toBeInTheDocument();
});
