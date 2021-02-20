import React from 'react'
import './Modal.css'

function Modal({setOpen, setRegisterModal, registerModal}) {
const closeModal = () => {
    if (registerModal) {
      return  setRegisterModal(false)
    }
    return setOpen(false)
    
}

    return (
        <div className="Modal" onClick={closeModal}>
            
        </div>
    )
}

export default Modal
