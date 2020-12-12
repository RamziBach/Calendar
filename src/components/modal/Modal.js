import React from 'react';

const Modal = ({ isOpen, date, handleClose, holidayName, information }) => {
  return (
    <div
      style={isOpen ? { display: 'grid' } : { display: 'none' }}
      className="modal animate__animated animate__fadeIn animate__faster"
    >
      <div className="modal-box">
        <div className="modal-header">
          <h4 className="modal-header-title">{date}</h4>
          <button onClick={handleClose} className="modal-header-close-btn">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <h4 className="modal-h4-holiday">
          <span className="modal-h4-holiday-title">
            <i className="fas fa-glass-cheers"></i> Holiday:
          </span>{' '}
          {holidayName}
        </h4>
        <div className="modal-holiday-information-container">
          <h4 className="modal-h4-holiday-information-title">Information:</h4>
          <h5 className="modal-information">{information}</h5>
        </div>
      </div>
    </div>
  );
};

export default Modal;
