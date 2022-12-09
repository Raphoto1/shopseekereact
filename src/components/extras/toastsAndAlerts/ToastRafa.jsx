import React, { useState } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'

function ToastRafa({toastMesagge, show, toggleShowRafa}) {
    
  return (
    <div>
        <ToastContainer position='middle-center'>
            <Toast show={show} onClose={() => toggleShowRafa(false)} delay={3000} autohide>
            <Toast.Header closeButton={false}>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">{toastMesagge}</strong>
              </Toast.Header>
            </Toast>
        </ToastContainer>
    </div>
  )
}

export default ToastRafa