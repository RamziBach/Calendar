import React from 'react';
import Header from './header/Header';
import Calendar from './calendar/Calendar.js';
import Modal from './modal/Modal';
import '../style/app.css';

const App = () => {
  return (
    <>
      <Header />
      <Calendar />
      <Modal />
    </>
  );
};

export default App;
