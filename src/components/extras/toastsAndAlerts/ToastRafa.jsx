import React, { useState } from 'react'
import { Toast } from 'react-bootstrap'

function ToastRafa({toastMesagge, show, toggleShowRafa}) {
    
  return (
    <div>
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
    </div>
  )
}

export default ToastRafa