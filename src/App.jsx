
import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'


function App() {
const[modalIsopen, setModalIsOpen] =useState(false)

const openModal =() => {
  setModalIsOpen(true)
} 

const closeModal = () =>{
  setModalIsOpen(false)
}

  return (
    <>
      <div className='clase_Modal'>
        <button onClick={openModal} className='btn_open'>Abrir Modal</button>
        <Modal 
        modalIsopen={modalIsopen} 
        closeModal={closeModal}>
          <h2>Contenido del Modal</h2>
          <p>Aqui esta parte de tu modal</p>
          <button onClick={closeModal} className='btn_aceptar'>Aceptar</button>
        </Modal>
      </div>
    </>
  )
}

export default App
