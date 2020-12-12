import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  january as januaryData,
  february as februaryData,
  march as marchData,
  april as aprilData,
  may as mayData,
  june as juneData,
  july as julyData,
  august as augustData,
  september as septemberData,
  october as octoberData,
  november as novemberData,
  december as decemberData,
} from '../../data/data';
import Legend from '../legend/Legend';
import Month from '../month/Month';
import Modal from '../modal/Modal';

const Calendar = () => {
  const weeks = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const isHolidayStyle = { backgroundColor: '#ef4462', color: '#eef2f6' };
  const isWeekendStyle = { backgroundColor: '#8aa6c1' };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [holidayName, setHolidayName] = useState('');
  const [date, setDate] = useState('');
  const [holidayInformation, setHolidayInformation] = useState('');

  const handleClose = () => {
    setIsModalOpen(false);
    setHolidayName('');
    setDate('');
  };

  const daysOfTheWeek = weeks.map(day => <p key={uuidv4()}>{day}</p>);

  const january = januaryData.map(data => (
    <div
      onClick={() => {
        setIsModalOpen(true);
        setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
        setDate(data.date);
        setHolidayInformation(data.holidayInformation);
      }}
      style={
        data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {}
      }
      className="days"
      key={data.id}
    >
      {data.day}
    </div>
  ));

  const february = februaryData.map(data => (
    <div
      onClick={() => {
        setIsModalOpen(true);
        setDate(data.date);
        setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      }}
      style={
        data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {}
      }
      className="days"
      key={data.id}
    >
      {data.day}
    </div>
  ));

  const march = marchData.map(data => (
    <div
      onClick={() => {
        setIsModalOpen(true);
        setDate(data.date);
        setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      }}
      style={
        data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {}
      }
      className="days"
      key={data.id}
    >
      {data.day}
    </div>
  ));

  const april = aprilData.map(data => (
    <div
      onClick={() => {
        setIsModalOpen(true);
        setDate(data.date);
        setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      }}
      style={
        data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {}
      }
      className="days"
      key={data.id}
    >
      {data.day}
    </div>
  ));

  const may = mayData.map(data => (
    <div
      onClick={() => {
        setIsModalOpen(true);
        setDate(data.date);
        setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      }}
      style={
        data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {}
      }
      className="days"
      key={data.id}
    >
      {data.day}
    </div>
  ));

  const june = juneData.map(data => (
    <div
      onClick={() => {
        setIsModalOpen(true);
        setDate(data.date);
        setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      }}
      style={
        data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {}
      }
      className="days"
      key={data.id}
    >
      {data.day}
    </div>
  ));

  const july = julyData.map(data => (
    <div
      onClick={() => {
        setIsModalOpen(true);
        setDate(data.date);
        setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      }}
      style={
        data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {}
      }
      className="days"
      key={data.id}
    >
      {data.day}
    </div>
  ));

  const august = augustData.map(data => (
    <div
      onClick={() => {
        setIsModalOpen(true);
        setDate(data.date);
        setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      }}
      style={
        data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {}
      }
      className="days"
      key={data.id}
    >
      {data.day}
    </div>
  ));

  const september = septemberData.map(data => (
    <div
      onClick={() => {
        setIsModalOpen(true);
        setDate(data.date);
        setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      }}
      style={
        data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {}
      }
      className="days"
      key={data.id}
    >
      {data.day}
    </div>
  ));

  const october = octoberData.map(data => (
    <div
      onClick={() => {
        setIsModalOpen(true);
        setDate(data.date);
        setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      }}
      style={
        data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {}
      }
      className="days"
      key={data.id}
    >
      {data.day}
    </div>
  ));

  const november = novemberData.map(data => (
    <div
      onClick={() => {
        setIsModalOpen(true);
        setDate(data.date);
        setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      }}
      style={
        data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {}
      }
      className="days"
      key={data.id}
    >
      {data.day}
    </div>
  ));

  const december = decemberData.map(data => (
    <div
      onClick={() => {
        setIsModalOpen(true);
        setDate(data.date);
        setHolidayName(data.isHoliday ? data.holidayName : 'No holiday today');
      }}
      style={
        data.isHoliday ? isHolidayStyle : data.isWeekend ? isWeekendStyle : {}
      }
      className="days"
      key={data.id}
    >
      {data.day}
    </div>
  ));

  return (
    <>
      <div className="calendar">
        <div className="md-container">
          <h1 className="calendar-title">
            Canadian Calendar{' '}
            <i className="canadian-icon fab fa-canadian-maple-leaf" /> <br />{' '}
            2021
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
      <Modal
        isOpen={isModalOpen}
        date={date}
        handleClose={handleClose}
        holidayName={holidayName}
        information={holidayInformation}
      />
    </>
  );
};

export default Calendar;
