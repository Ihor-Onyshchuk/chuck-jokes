import React from 'react';
import {createPortal} from 'react-dom';
import T from 'prop-types';

import './Modal.scss';

const Modal = ({onClose, children}) => {
  return createPortal(
    <div className="modal">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-content">
        <div className="container">
          <div className="row">
            <div className="col-12">{children}</div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  onClose: T.func.isRequired,
  children: T.element,
};

export default Modal;
