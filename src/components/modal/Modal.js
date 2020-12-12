import React from 'react';

const Modal = ({ isOpen, date, handleClose, holidayName, moods }) => {
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
        <div className="modal-about-day">
          <h4 className="modal-about-title">How was your day?</h4>
          <div className="modal-mood-btn-container">
            <button className="modal-mood-btn happy-faces" title="Awesome !">
              <i className="far fa-laugh-beam"></i>
            </button>
            <button className="modal-mood-btn happy-faces" title="Great !">
              <i className="far fa-grin"></i>
            </button>
            <button className="modal-mood-btn unhappy-faces" title="meh">
              <i className="far fa-meh"></i>
            </button>
            <button className="modal-mood-btn unhappy-faces" title="sad">
              <i className="far fa-sad-tear"></i>
            </button>
            <button className="modal-mood-btn unhappy-faces" title="angry">
              <i className="far fa-angry"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
