import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { calendar } from '../../data/data';
import Legend from '../legend/Legend';

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
          <i className="canadian-icon fab fa-canadian-maple-leaf"></i> <br />{' '}
          2021
        </h1>
        <Legend />
        <div className="calendar-grid">
          <div>
            <h5 className="month">January</h5>
            <div className="calendar-week">{daysOfTheWeek}</div>
            <div className="calendar-days">
              <div className="january-empty"></div>
              {january}
            </div>
          </div>
          <div>
            <h5 className="month">February</h5>
            <div className="calendar-week">{daysOfTheWeek}</div>
            <div className="calendar-days">
              <div className="february-empty"></div>
              {february}
            </div>
          </div>
          <div>
            <h5 className="month">March</h5>
            <div className="calendar-week">{daysOfTheWeek}</div>
            <div className="calendar-days">
              <div className="march-empty"></div>
              {march}
            </div>
          </div>
          <div>
            <h5 className="month">April</h5>
            <div className="calendar-week">{daysOfTheWeek}</div>
            <div className="calendar-days">
              <div className="april-empty"></div>
              {april}
            </div>
          </div>
          <div>
            <h5 className="month">May</h5>
            <div className="calendar-week">{daysOfTheWeek}</div>
            <div className="calendar-days">
              <div className="may-empty"></div>
              {may}
            </div>
          </div>
          <div>
            <h5 className="month">June</h5>
            <div className="calendar-week">{daysOfTheWeek}</div>
            <div className="calendar-days">
              <div className="june-empty"></div>
              {june}
            </div>
          </div>
          <div>
            <h5 className="month">July</h5>
            <div className="calendar-week">{daysOfTheWeek}</div>
            <div className="calendar-days">
              <div className="july-empty"></div>
              {july}
            </div>
          </div>
          <div>
            <h5 className="month">August</h5>
            <div className="calendar-week">{daysOfTheWeek}</div>
            <div className="calendar-days">{august}</div>
          </div>
          <div>
            <h5 className="month">September</h5>
            <div className="calendar-week">{daysOfTheWeek}</div>
            <div className="calendar-days">
              <div className="september-empty"></div>
              {september}
            </div>
          </div>
          <div>
            <h5 className="month">October</h5>
            <div className="calendar-week">{daysOfTheWeek}</div>
            <div className="calendar-days">
              <div className="october-empty"></div>
              {october}
            </div>
          </div>
          <div>
            <h5 className="month">November</h5>
            <div className="calendar-week">{daysOfTheWeek}</div>
            <div className="calendar-days">
              <div className="november-empty"></div>
              {november}
            </div>
          </div>
          <div>
            <h5 className="month">December</h5>
            <div className="calendar-week">{daysOfTheWeek}</div>
            <div className="calendar-days">
              <div className="december-empty"></div>
              {december}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
