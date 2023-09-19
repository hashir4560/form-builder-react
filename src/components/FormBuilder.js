import React, { useState } from 'react';
import DragContainer from './DragContainer';
import DropContainer from './DropContainer';

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    if (selectedItem) {
      setFormFields([...formFields, selectedItem]);
      setSelectedItem(null); // Reset selected item after adding it to formFields
    }
  };

  const handleRemoveField = (index) => {
    const updatedFormFields = [...formFields];
    updatedFormFields.splice(index, 1);
    setFormFields(updatedFormFields);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="App">
      <DragContainer handleSelectItem={handleSelectItem} selectedItem={selectedItem} />
      <DropContainer
        formFields={formFields}
        handleDrop={handleDrop}
        handleRemoveField={handleRemoveField}
      />
    </div>
  );
};

export default FormBuilder;
