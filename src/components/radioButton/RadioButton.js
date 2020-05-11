import React from 'react';
import cx from 'classnames';
import T from 'prop-types';

import './RadioButton.scss';

const RadionButton = ({
  label,
  active,
  value,
  name,
  className = 'mb-1',
  onChange,
}) => {
  return (
    <div className={cx('custom-control custom-radio', className)}>
      <input
        className="custom-control-input"
        type="radio"
        name={name}
        id={value}
        value={value}
        checked={value === active}
        onChange={onChange}
      />
      <label className="custom-control-label fz-18 lh-26 ml-2" htmlFor={value}>
        {label}
      </label>
    </div>
  );
};

RadionButton.propTypes = {
  value: T.string.isRequired,
  name: T.string.isRequired,
  onChange: T.func.isRequired,
  label: T.string,
  active: T.string,
  className: T.string,
};

export default RadionButton;
