import React from 'react';
import "./modal.css";
import sonic from "/public/3F3F.gif";

const Modal = ({ modalIsOpen, closeModal, children }) => {
  if (!modalIsOpen)
    return null;

  return (
    <div className={`modal-overlay ${modalIsOpen ? 'open' : ''}`}>
      <section className={`modal ${modalIsOpen ? 'open' : ''}`}>
        <img className='imgsonic' src={sonic} alt="" />
        <button className='close_btn' onClick={closeModal}>&times;</button>
        {children}
      </section>
    </div>
  );
}

export default Modal;