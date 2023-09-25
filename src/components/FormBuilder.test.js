import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FormBuilder from "./FormBuilder";

describe("FormBuilder Component", () => {
  it("should render the FormBuilder component", () => {
    const { getByText } = render(<FormBuilder />);

    // Check if the component's title is rendered
    const title = getByText("Form Builder");
    expect(title).toBeInTheDocument();
  });

  it("should add an item when dropped into the DropContainer", () => {
    const { getByText } = render(<FormBuilder />);

    // Find the DragContainer and DropContainer by their titles
    const dragContainer = getByText("Elements");
    const dropContainer = getByText("Form Builder");

    // Simulate dragging an item from DragContainer to DropContainer
    fireEvent.dragStart(dragContainer.firstChild);
    fireEvent.drop(dropContainer);

    // Check if the item is added to the DropContainer
    const addedItem = getByText("Name field"); // Adjust this text to match your actual item
    expect(addedItem).toBeInTheDocument();
  });

  it('should remove an item when "Remove" button is clicked', () => {
    const { getByText, queryByText } = render(<FormBuilder />);

    // Find the DragContainer and DropContainer by their titles
    const dragContainer = getByText("Elements");
    const dropContainer = getByText("Form Builder");

    // Simulate dragging an item from DragContainer to DropContainer
    fireEvent.dragStart(dragContainer.firstChild);
    fireEvent.drop(dropContainer);

    // Find the "Remove" button and simulate a click
    const removeButton = getByText("Remove");
    fireEvent.click(removeButton);

    // Check if the item is removed from the DropContainer
    const removedItem = queryByText("Name field"); // Adjust this text to match your actual item
    expect(removedItem).toBeNull();
  });

  it('should submit the form and clear form fields when "Submit" button is clicked', () => {
    const { getByText } = render(<FormBuilder />);

    // Find the DragContainer and DropContainer by their titles
    const dragContainer = getByText("Elements");
    const dropContainer = getByText("Form Builder");

    // Simulate dragging an item from DragContainer to DropContainer
    fireEvent.dragStart(dragContainer.firstChild);
    fireEvent.drop(dropContainer);

    // Find the "Submit" button and simulate a click
    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);

    // Check if the form is submitted (you can use a toast message or any other element to confirm)
    const submittedMessage = getByText("Submitted!"); // Adjust this text to match your actual message
    expect(submittedMessage).toBeInTheDocument();
  });
  it("should select an item when dragged from the DragContainer", () => {
    const { getByText, getByTestId } = render(<FormBuilder />);

    // Find the DragContainer and an item in it
    const dragContainer = getByTestId("drag-container");
    const itemName = getByText("Name field"); // Adjust this text to match your actual item

    // Simulate dragging an item from DragContainer
    fireEvent.dragStart(itemName);

    // Check if the item is selected
    const selectedItem = getByTestId("selected-item"); // Adjust this data-testid to match your actual selected item
    expect(selectedItem).toBeInTheDocument();
  });
  it("should not drop an item if no item is selected", () => {
    const { getByTestId } = render(<FormBuilder />);

    // Find the DropContainer
    const dropContainer = getByTestId("drop-container");

    // Simulate dropping an item into DropContainer without selecting an item
    fireEvent.drop(dropContainer);

    // Check if the item is not added to the DropContainer
    const addedItem = getByText("Name field"); // Adjust this text to match your actual item
    expect(addedItem).toBeNull();
  });
});
