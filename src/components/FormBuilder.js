import React, { useState } from 'react';
import DragContainer from './DragContainer';
import DropContainer from './DropContainer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  //This function is called when an item is dropped into the drop area.

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
  const handleSubmit = () => {
    
    toast.success('Form Submitted!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
    setFormFields([]);
  };

  return (
    <div className="App">
      <DragContainer handleSelectItem={handleSelectItem} selectedItem={selectedItem} />
      <DropContainer
        formFields={formFields}
        handleDrop={handleDrop}
        handleRemoveField={handleRemoveField}
        handleSubmit={handleSubmit}
        setFormFields={setFormFields}
      />
       
    </div>

  );
};

export default FormBuilder;
