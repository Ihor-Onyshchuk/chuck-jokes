import React from 'react';
import T from 'prop-types';
import cx from 'classnames';

import './Avatar.scss';

const Avatar = ({src, className}) => {
  return (
    <div className={cx('avatar', className)}>
      {src ? (
        <img className="avatar-img" src={src} alt="joke icon" />
      ) : (
        <span className="avatar-empty icon-message text-muted" />
      )}
    </div>
  );
};

Avatar.propTypes = {
  src: T.string,
  className: T.string,
};

export default Avatar;
