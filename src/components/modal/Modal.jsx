import React from 'react';
import {createPortal} from 'react-dom';
import './Modal.scss';

const Modal = ({isOpen, onClose, children}) => {
  return createPortal(
    <div className="modal" onClick={() => onClose(!isOpen)}>
      <div className="modal-backdrop" />
      <div className="modal-content">
        <div className="container">
          <div class="row justify-content-end">
            <div className="col-auto">{/* Close component */}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
