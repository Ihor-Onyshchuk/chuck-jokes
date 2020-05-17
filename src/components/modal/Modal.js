import React from 'react';
import {createPortal} from 'react-dom';

import T from 'prop-types';
import cx from 'classnames';

import './Modal.scss';
import Animation from '../animation/Animation';

const Modal = ({onClose, children, className, isOpen}) => {
  const handleModalClose = () => onClose(false);
  return createPortal(
    <Animation show={isOpen}>
      <div className={cx('modal', className)}>
        <div className="modal-backdrop" onClick={handleModalClose} />
        <div className="modal-content bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 layout-offset">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </Animation>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  onClose: T.func.isRequired,
  children: T.element,
};

export default Modal;
