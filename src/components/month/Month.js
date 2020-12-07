import React from 'react';

const Month = ({ monthTitle, daysOfTheWeek, className, month }) => {
  return (
    <div>
      <h5 className="month">{monthTitle}</h5>
      <div className="calendar-week">{daysOfTheWeek}</div>
      <div className="calendar-days">
        <div className={`${className}-empty`}></div>
        {month}
      </div>
    </div>
  );
};

export default Month;
