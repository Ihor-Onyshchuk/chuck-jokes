import React from 'react';
import T from 'prop-types';
import cx from 'classnames';

import './Avatar.scss';

const Avatar = ({src, className}) => (
  <div className={cx('avatar', className)}>
    {src ? (
      <img className="avatar-img" src={src} alt="joke icon" draggable="false" />
    ) : (
      <span className="avatar-empty icon-message text-muted" />
    )}
  </div>
);

Avatar.propTypes = {
  src: T.string,
  className: T.string,
};

export default Avatar;
