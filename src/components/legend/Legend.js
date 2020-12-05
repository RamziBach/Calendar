import React from 'react';

const Legend = () => {
  return (
    <div className="legend">
      <div className="legend-holiday-parent">
        <div className="legend-holiday"></div>
        <h5 className="legend-name holiday">Holidays</h5>
      </div>
      <div className="legend-weekend-parent">
        <div className="legend-weekends"></div>
        <h5 className="legend-name weekends">Weekends</h5>
      </div>
    </div>
  );
};

export default Legend;
