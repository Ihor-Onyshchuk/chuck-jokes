import React from 'react';
import cx from 'classnames';
import T from 'prop-types';

import './ToggleModal.scss';

const ToggleModal = ({onClick, active = false}) => {
  const handleToggle = () => onClick(!active);
  return (
    <div className={cx('toggle-modal d-flex', {active})} onClick={handleToggle}>
      <div className="menu-icon">
        <span className="menu-icon-bread">
          <span className="menu-icon-bread-crust" />
        </span>
        <span className="menu-icon-bread">
          <span className="menu-icon-bread-crust" />
        </span>
      </div>
      <span className="ml-2 text-muted lh-28 fz-20 fw-700">Favourite</span>
    </div>
  );
};

ToggleModal.propTypes = {
  onClick: T.func.isRequired,
  active: T.bool,
};

export default ToggleModal;
