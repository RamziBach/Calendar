import React from 'react';

const Moon = ({ newMoon, fullMoon }) => {
  return (
    <div className="moon">
      <p>{newMoon}:</p>
      <i className="far fa-circle" title="New moon" />
      <p>{fullMoon}:</p>
      <i className="fas fa-circle" title="full moon" />
    </div>
  );
};

export default Moon;
