import React from 'react';
import cx from 'classnames';
import T from 'prop-types';

import './ToggleModal.scss';

const ToggleModal = ({onClick, active = false, className}) => {
  const handleToggle = () => onClick(!active);
  return (
    <div
      className={cx('toggle-modal d-flex', {active}, className)}
      onClick={handleToggle}
    >
      <div className="menu-icon" />
      <span className="ml-2 text-muted lh-28 fz-20 fw-700">Favourite</span>
    </div>
  );
};

ToggleModal.propTypes = {
  onClick: T.func.isRequired,
  active: T.bool,
  className: T.string,
};

export default ToggleModal;
