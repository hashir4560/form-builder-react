
import React from "react";
import { toast } from 'react-toastify'; // Import toast from react-toastify
import  { useState } from "react";



const DropContainer = ({formFields, handleDrop, handleRemoveField,handleSubmit }) => {
  const [formError, setFormError] = useState(false);
  const handleFormSubmit = () => {
    if (formFields.length === 0) {
      // If formFields is empty, show an error toast
      toast.error('Form cannot be submitted with empty fields', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
      setFormError(true);
    } else {
      // Form is not empty, proceed with submission
      setFormError(false);
      handleSubmit();
      // Clear the form fields if needed
      // setFormFields([]);
    }
  };
  

  // const handleFormSubmit = () => {
  //   if (formFields.length === 0) {
  //     // If formFields is empty, show an error toast
  //     toast.error('Form cannot be submitted with empty fields', {
  //       position: toast.POSITION.TOP_CENTER,
  //       autoClose: 3000,
  //     });
  //     setFormError(true);
  //   } else {
  //     // Form is not empty, proceed with submission
  //     setFormError(false);
  //     handleSubmit();
  //     setFormFields([]);

  //   }
  // };
  return (
    <div className="form-builder-container">
      <h2>Form Builder</h2>
      <div
        className="form-builder"
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
      >
        <div className="form-fields-wrapper">
          {formFields.map((field, index) => (
            <div key={index} className="form-field">
              {field === "Name" ? (
                <div>
                  <label>Name:</label>
                  <input type="text" placeholder="Name" />
                </div>
              ) : field === "Input" ? (
                <div>
                  <label>Input:</label>
                  <input type="text" placeholder="Input field" />
                </div>
              ) : field === "Checkbox" ? (
                <div>
                  <label>
                    <input type="checkbox" />
                    Checkbox
                  </label>
                </div>
              ) : field === "Date" ? (
                <div>
                  <label>Date:</label>
                  <input type="date" />
                </div>
              ) : field === "Number" ? (
                <div>
                  <label>Phone Number:</label>
                  <input type="tel"
                    placeholder="Phone Number"
                    onInput={(e) => {
                      const phoneNumber = e.target.value.replace(/[^0-9]/g, "");
                      e.target.value=phoneNumber;
                    }}
                  />
                </div>
              ) : null}
              <button onClick={() => handleRemoveField(index)}>Remove</button>
            </div>
          ))}
        </div>

        <div className="submit-button-container">
          <button className="submit-button" type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropContainer;
