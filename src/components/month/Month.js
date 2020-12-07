import React from 'react';
import Moon from '../moon/Moon';

const Month = ({
  monthTitle,
  daysOfTheWeek,
  className,
  month,
  newMoon,
  fullMoon,
}) => {
  return (
    <div>
      <h5 className="month">{monthTitle}</h5>
      <div className="calendar-week">{daysOfTheWeek}</div>
      <div className="calendar-days">
        <div className={`${className}-empty`}></div>
        {month}
      </div>
      <Moon newMoon={newMoon} fullMoon={fullMoon} />
    </div>
  );
};

export default Month;
