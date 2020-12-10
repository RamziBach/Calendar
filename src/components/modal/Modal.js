import React from 'react';

const Modal = ({ isOpen, handleClose }) => {
  return (
    <div
      style={isOpen ? { display: 'grid' } : { display: 'none' }}
      className="modal"
    >
      <div className="modal-box">
        <div className="modal-header">
          <h4 className="modal-header-title">April 7 2021</h4>
          <button onClick={handleClose} className="modal-header-close-btn">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
