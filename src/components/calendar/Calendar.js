import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { calendar } from '../../data/data';
import Legend from '../legend/Legend';
import Month from '../month/Month';

const Calendar = () => {
  const weeks = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const isHoliday = { backgroundColor: '#ef4462', color: '#eef2f6' };
  const isWeekend = { backgroundColor: '#8aa6c1' };

  const daysOfTheWeek = weeks.map(day => <p key={uuidv4()}>{day}</p>);

  const january = calendar.january.map(data => (
    <div
      style={data.isHoliday ? isHoliday : data.isWeekend ? isWeekend : {}}
      className="days"
      key={uuidv4()}
    >
      {data.day}
    </div>
  ));

  const february = calendar.february.map(data => (
    <div
      style={data.isHoliday ? isHoliday : data.isWeekend ? isWeekend : {}}
      className="days"
      key={uuidv4()}
    >
      {data.day}
    </div>
  ));

  const march = calendar.march.map(data => (
    <div
      style={data.isHoliday ? isHoliday : data.isWeekend ? isWeekend : {}}
      className="days"
      key={uuidv4()}
    >
      {data.day}
    </div>
  ));

  const april = calendar.april.map(data => (
    <div
      style={data.isHoliday ? isHoliday : data.isWeekend ? isWeekend : {}}
      className="days"
      key={uuidv4()}
    >
      {data.day}
    </div>
  ));

  const may = calendar.may.map(data => (
    <div
      style={data.isHoliday ? isHoliday : data.isWeekend ? isWeekend : {}}
      className="days"
      key={uuidv4()}
    >
      {data.day}
    </div>
  ));

  const june = calendar.june.map(data => (
    <div
      style={data.isHoliday ? isHoliday : data.isWeekend ? isWeekend : {}}
      className="days"
      key={uuidv4()}
    >
      {data.day}
    </div>
  ));

  const july = calendar.july.map(data => (
    <div
      style={data.isHoliday ? isHoliday : data.isWeekend ? isWeekend : {}}
      className="days"
      key={uuidv4()}
    >
      {data.day}
    </div>
  ));

  const august = calendar.august.map(data => (
    <div
      style={data.isHoliday ? isHoliday : data.isWeekend ? isWeekend : {}}
      className="days"
      key={uuidv4()}
    >
      {data.day}
    </div>
  ));

  const september = calendar.september.map(data => (
    <div
      style={data.isHoliday ? isHoliday : data.isWeekend ? isWeekend : {}}
      className="days"
      key={uuidv4()}
    >
      {data.day}
    </div>
  ));

  const october = calendar.october.map(data => (
    <div
      style={data.isHoliday ? isHoliday : data.isWeekend ? isWeekend : {}}
      className="days"
      key={uuidv4()}
    >
      {data.day}
    </div>
  ));

  const november = calendar.november.map(data => (
    <div
      style={data.isHoliday ? isHoliday : data.isWeekend ? isWeekend : {}}
      className="days"
      key={uuidv4()}
    >
      {data.day}
    </div>
  ));

  const december = calendar.december.map(data => (
    <div
      style={data.isHoliday ? isHoliday : data.isWeekend ? isWeekend : {}}
      className="days"
      key={uuidv4()}
    >
      {data.day}
    </div>
  ));

  return (
    <div className="calendar">
      <div className="md-container">
        <h1 className="calendar-title">
          Canadian Calendar{' '}
          <i className="canadian-icon fab fa-canadian-maple-leaf" /> <br /> 2021
        </h1>
        <Legend />
        <div className="calendar-grid">
          <Month
            monthTitle="January"
            daysOfTheWeek={daysOfTheWeek}
            className="january"
            month={january}
            newMoon="13"
            fullMoon="28"
          />
          <Month
            monthTitle="February"
            daysOfTheWeek={daysOfTheWeek}
            className="february"
            month={february}
            newMoon="11"
            fullMoon="27"
          />
          <Month
            monthTitle="March"
            daysOfTheWeek={daysOfTheWeek}
            className="march"
            month={march}
            newMoon="13"
            fullMoon="28"
          />
          <Month
            monthTitle="April"
            daysOfTheWeek={daysOfTheWeek}
            className="april"
            month={april}
            newMoon="11"
            fullMoon="26"
          />
          <Month
            monthTitle="May"
            daysOfTheWeek={daysOfTheWeek}
            className="may"
            month={may}
            newMoon="11"
            fullMoon="26"
          />
          <Month
            monthTitle="June"
            daysOfTheWeek={daysOfTheWeek}
            className="june"
            month={june}
            newMoon="10"
            fullMoon="24"
          />
          <Month
            monthTitle="July"
            daysOfTheWeek={daysOfTheWeek}
            className="july"
            month={july}
            newMoon="9"
            fullMoon="23"
          />
          <Month
            monthTitle="August"
            daysOfTheWeek={daysOfTheWeek}
            className="august"
            month={august}
            newMoon="8"
            fullMoon="22"
          />
          <Month
            monthTitle="September"
            daysOfTheWeek={daysOfTheWeek}
            className="september"
            month={september}
            newMoon="6"
            fullMoon="20"
          />
          <Month
            monthTitle="October"
            daysOfTheWeek={daysOfTheWeek}
            className="october"
            month={october}
            newMoon="6"
            fullMoon="20"
          />
          <Month
            monthTitle="November"
            daysOfTheWeek={daysOfTheWeek}
            className="november"
            month={november}
            newMoon="4"
            fullMoon="19"
          />
          <Month
            monthTitle="December"
            daysOfTheWeek={daysOfTheWeek}
            className="december"
            month={december}
            newMoon="4"
            fullMoon="18"
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
