import React from 'react';
import {createPortal} from 'react-dom';

import T from 'prop-types';
import cx from 'classnames';

import './Modal.scss';

const Modal = ({onClose, children, className}) => {
  const handleModalClose = () => onClose(false);
  return createPortal(
    <div className={cx('modal', className)}>
      <div className="modal-backdrop" onClick={handleModalClose} />
      <div className="modal-content bg-light">
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
