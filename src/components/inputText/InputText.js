import React from 'react';
import cx from 'classnames';
import T from 'prop-types';

const InputText = ({
  placeholder,
  value,
  onChange,
  className = 'mb-3 lh-22',
}) => (
  <input
    className={cx('form-control', className)}
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

InputText.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
  placeholder: T.string,
  className: T.string,
};

export default InputText;
