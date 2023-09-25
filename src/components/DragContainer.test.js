import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DragContainer from './DragContainer';

describe('DragContainer', () => {
  it('should render correctly', () => {
    const { getByText } = render(<DragContainer />);
    
    // Check if the component renders the elements correctly
    expect(getByText('Elements')).toBeInTheDocument();
    expect(getByText('Name field')).toBeInTheDocument();
    expect(getByText('Input field')).toBeInTheDocument();
   
  });
  it('should render correctly', () => {
    const { getByText } = render(<DragContainer />);
    expect(getByText('Checkbox')).toBeInTheDocument();
    expect(getByText('Date field')).toBeInTheDocument();
    expect(getByText('phoneNumber')).toBeInTheDocument();

  });

  it('should add a "selected" class to the selected item', () => {
    const selectedItem = 'Input'; // Adjust this to match your expected item name
    const { getByText } = render(<DragContainer selectedItem={selectedItem} />);
    
    const inputField = getByText('Input field');
    
    // Check if the "selected" class is applied to the selected item
    expect(inputField).toHaveClass('selected');
  });
  


});

