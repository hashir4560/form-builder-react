import React from 'react';

const DropContainer = ({ formFields, handleDrop, handleRemoveField }) => {
  return (
    <div className="form-container" onDragOver={(event) => event.preventDefault()} onDrop={handleDrop}>
      <h2>Form Builder</h2>
      <form>
        {formFields.map((field, index) => (
          <div key={index} className="form-field">
            {field === 'Name' ? (
              <div>
                <label>Name:</label>
                <input type="text" placeholder="Name" />
              </div>
            ) : field === 'Input' ? (
              <div>
                <label>Input:</label>
                <input type="text" placeholder="Input field" />
              </div>
            ) : field === 'Checkbox' ? (
              <div>
                <label>
                  <input type="checkbox" />
                  Checkbox
                </label>
              </div>
            ) : field === 'Date' ? (
              <div>
                <label>Date:</label>
                <input type="date" />
              </div>
            ) : null}
            <button onClick={() => handleRemoveField(index)}>Remove</button>
          </div>
        ))}
      </form>
    </div>
  );
};

export default DropContainer;
