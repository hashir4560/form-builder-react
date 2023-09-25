import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DropContainer from "./DropContainer";

describe("DropContainerFields", () => {
  it("should handle form submission when the form is not empty", () => {
    const formFields = ["Name", "Input", "Phone Number"];
    const handleSubmit = jest.fn();

    const { getByText } = render(
      <DropContainer formFields={formFields} handleSubmit={handleSubmit} />
    );

    // Find the submit button and click it
    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);

    // Ensure that the handleSubmit function was called
    expect(handleSubmit).toHaveBeenCalled();
  });

  it("should handle form submission with an empty form", () => {
    const formFields = [];
    const handleSubmit = jest.fn();

    const { getByText } = render(
      <DropContainer formFields={formFields} handleSubmit={handleSubmit} />
    );

    // Find the submit button and click it
    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);

    // Ensure that the handleSubmit function was not called
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("allows input of only numbers in Phone Number field", () => {
    const { getByLabelText } = render(
      <DropContainer formFields={["Number"]} />
    );

    // Find the input field by its label text
    const inputField = getByLabelText("Phone Number");

    // Simulate typing a non-numeric character (e.g., 'A') into the input field
    fireEvent.input(inputField, { target: { value: "A" } });

    // Assert that the input field value is empty or contains only numbers
    expect(inputField).toHaveTextContent(/^$|^[0-9]*$/);
  });
  it("allows input of date in Date field", () => {
    const formFields = ["Date"];
    const handleSubmit = jest.fn();

    const { getByLabelText } = render(
      <DropContainer formFields={formFields} handleSubmit={handleSubmit} />
    );

    // Find the input field by its label text (use the actual label text)
    const dateInput = getByLabelText("Date:");

    // Simulate typing a date into the input field
    fireEvent.change(dateInput, { target: { value: "2023-09-30" } });

    // Assert that the input field value matches the typed date
    expect(dateInput).toHaveValue("2023-09-30");
  });
  it("allows checking/unchecking of Checkbox field", () => {
    const formFields = ["Checkbox"];
    const handleSubmit = jest.fn();

    const { getByLabelText } = render(
      <DropContainer formFields={formFields} handleSubmit={handleSubmit} />
    );

    // Find the checkbox input field by its label text (use the actual label text)
    // Find the checkbox input field by its label text (use the actual label text)
    const checkboxInput = getByLabelText("Checkbox");

    // Assert that the checkbox is initially unchecked
    expect(checkboxInput).not.toBeChecked();

    // Simulate checking the checkbox
    fireEvent.click(checkboxInput);

    // Assert that the checkbox is checked
    expect(checkboxInput).toBeChecked();

    // Simulate unchecking the checkbox
    fireEvent.click(checkboxInput);

    // Assert that the checkbox is unchecked again
    expect(checkboxInput).not.toBeChecked();
  });
  it('should render a "Text" field', () => {
    const formFields = ["Input"];
    const { getByText, getByPlaceholderText } = render(
      <DropContainer formFields={formFields} />
    );

    // Check if the label and input for "Text" field are present
    const textLabel = getByText("Input:");
    const textInput = getByPlaceholderText("Input field");

    expect(textLabel).toBeInTheDocument();
    expect(textInput).toBeInTheDocument();
  });

  it('should render a "Name" field', () => {
    const formFields = ["Name"];
    const { getByText, getByPlaceholderText } = render(
      <DropContainer formFields={formFields} />
    );

    // Check if the label and input for "Name" field are present
    const nameLabel = getByText("Name:");
    const nameInput = getByPlaceholderText("Name");

    expect(nameLabel).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
  });
});

describe("DropContainer", () => {
  it('should call handleRemoveField with the correct index when "Remove" button is clicked', () => {
    // Create a mock function for handleRemoveField
    const handleRemoveField = jest.fn();

    // Define formFields and index
    const formFields = ["Input", "Name", "Date"];
    const indexToRemove = 1; // Index of the "Name" field

    // Render the DropContainer component with the mock function
    const { getAllByText } = render(
      <DropContainer
        formFields={formFields}
        handleRemoveField={handleRemoveField}
      />
    );

    // Find all "Remove" buttons
    const removeButtons = getAllByText("Remove");

    // Simulate a click event on the "Remove" button at the specified index
    fireEvent.click(removeButtons[indexToRemove]);

    // Assert that handleRemoveField was called with the correct index
    expect(handleRemoveField).toHaveBeenCalledWith(indexToRemove);
  });

  it('should call handleSubmit when "Submit" button is clicked with non-empty form', () => {
    // Create a mock function for handleSubmit
    const handleSubmit = jest.fn();

    // Define formFields with some fields
    const formFields = ["Input", "Name", "Date"];

    // Render the DropContainer component with the mock function
    const { getByText } = render(
      <DropContainer formFields={formFields} handleSubmit={handleSubmit} />
    );

    // Find the "Submit" button and simulate a click event
    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);

    // Assert that handleSubmit was called
    expect(handleSubmit).toHaveBeenCalled();
  });
});
