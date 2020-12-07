import React from 'react';

const Legend = () => {
  return (
    <div className="legend">
      <div className="legend-holiday-parent">
        <h5 className="legend-name holiday">Holidays:</h5>
        <div className="legend-holiday"></div>
      </div>
      <div className="legend-weekend-parent">
        <h5 className="legend-name weekends">Weekends:</h5>
        <div className="legend-weekends"></div>
      </div>
      <div className="legend-edited-parent">
        <h5 className="legend-name edited">Edited Day:</h5>
        <div className="legend-edited"></div>
      </div>
    </div>
  );
};

export default Legend;
