import React from 'react';

function Choice(props) {
  const handleIconClick = () => {
    props.onChoiceClick(); // update the prop name here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <a href="#" onClick={handleIconClick}>
        <i className="fas fa-hand-back-fist fa-rotate-90"></i>
      </a>
      <a href="#" onClick={handleIconClick}>
        <i className="fas fa-hand-scissors"></i>
      </a>
      <a href="#" onClick={handleIconClick}>
        <i className="fas fa-hand-holding"></i>
      </a>
    </div>
  );
}

export default Choice;