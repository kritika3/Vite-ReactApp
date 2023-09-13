import React from 'react';

//CSS Imports
import './CustomButton.css';

//CONSTANT Imports
import { BUTTON_TYPE } from '../../constant';

function CustomButton({ id, buttonName, buttonAction }) {
  return (
    <button
      className={`custom-btn ${
        buttonName == BUTTON_TYPE.SELECT ? 'select-btn' : 'remove-btn'
      }`}
      onClick={() => buttonAction(id)}
    >
      {buttonName}
    </button>
  );
}

export default CustomButton;
