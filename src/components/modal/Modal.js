import React from 'react';

const Modal = ({ isOpen, date, handleClose, holiday }) => {
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
        <h4>
          <span className="holiday-title">
            <i class="fas fa-glass-cheers"></i> Holiday:
          </span>{' '}
          {holiday}
        </h4>
      </div>
    </div>
  );
};

export default Modal;
