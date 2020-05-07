import React from 'react';
import './ToggleModal.scss';

const ToggleModal = ({onClick, active}) => {
  const activeModalToggler = active ? 'active' : '';
  return (
    <div className={`d-flex ${active ? 'px-1 my-3' : ''}`}>
      <div className="modal-close-btn" onClick={() => onClick(!active)}>
        <div className="line-wrapper d-flex justify-content-center">
          <span className={`btn-line line-1 ${activeModalToggler}`}></span>
          <span className={`btn-line  line-2 ${activeModalToggler}`}></span>
        </div>
      </div>
      <span className="ml-2 text-muted lh-28 fz-20 fw-700">Favourite</span>
    </div>
  );
};

export default ToggleModal;
