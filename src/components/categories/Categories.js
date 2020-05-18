import React from 'react';
import cx from 'classnames';
import T from 'prop-types';

import './Categories.scss';

const Categories = ({options, active, onChange}) => (
  <div className="btn-group d-flex flex-wrap mt-2 mb-3" role="group">
    {options.map(option => {
      const isActive = active === option;
      return (
        <button
          key={option}
          className={cx('btn-sm category-btn', {active: isActive})}
          type="button"
          onClick={() => (isActive ? null : onChange(option))}
        >
          {option}
        </button>
      );
    })}
  </div>
);

Categories.propTypes = {
  options: T.arrayOf(T.string).isRequired,
  active: T.string.isRequired,
  onChange: T.func.isRequired,
  className: T.string,
};

export default Categories;
