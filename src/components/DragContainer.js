import React from 'react';

const DragContainer = ({ handleSelectItem, selectedItem }) => {
  const handleDragStart = (event, item) => {
    event.dataTransfer.setData('text/plain', item);
    handleSelectItem(item); // Select the item on drag start
  };

  return (
    <div className="drag-container">
      <div
        className={`drag-item ${selectedItem === 'Name' ? 'selected' : ''}`}
        draggable
        onDragStart={(event) => handleDragStart(event, 'Name')}
      >
        Name field
      </div>
      <div
        className={`drag-item ${selectedItem === 'Input' ? 'selected' : ''}`}
        draggable
        onDragStart={(event) => handleDragStart(event, 'Input')}
      >
       Input field
      </div>
      <div
        className={`drag-item ${selectedItem === 'Checkbox' ? 'selected' : ''}`}
        draggable
        onDragStart={(event) => handleDragStart(event, 'Checkbox')}
      >
       Checkbox
      </div>
      <div
        className={`drag-item ${selectedItem === 'Date' ? 'selected' : ''}`}
        draggable
        onDragStart={(event) => handleDragStart(event, 'Date')}
      >
        Date field
      </div>
    </div>
  );
};

export default DragContainer;
