import React from 'react'
import "./modal.css"
import sonic from "/public/3F3F.gif"

const Modal = ({modalIsopen, closeModal, children}) => {
if(!modalIsopen)
return null;

  return (
    <div className='modal-overlay'>
        <section className='modal'>
<img className='imgsonic' src={sonic} alt="" />
            <button className='close_btn' onClick={closeModal}>&times;</button>
             {children}
        </section>
    </div>
  )
}

export default Modal