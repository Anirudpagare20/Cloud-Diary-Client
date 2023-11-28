// Alert.js
import React from 'react';

const Alert = (props) => {
  return (
    <div className="alert-container">
      <div className={`alert alert-success ${props.show ? 'show' : ''}`} role="alert">
        {props.message}
      </div>
    </div>
  );
};

export default Alert;
