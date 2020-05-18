import React from 'react';

import T from 'prop-types';
import cx from 'classnames';

import ToggleModal from '../toggleModal/ToggleModal';

const Header = ({toggleModalOpen, isModalOpen, className = 'mb-4'}) => (
  <header className={cx('pb-2', className)}>
    <nav className="navbar pt-0">
      <h1 className="navbar-brand lh-28 fw-700 p-0">MSI 2020</h1>
      <ToggleModal
        onClick={toggleModalOpen}
        active={isModalOpen}
        className="d-xl-none"
      />
    </nav>
    <h2 className="fz-32 lh-44 fw-700">Hey!</h2>
    <h4 className="fw-500 fz-24 lh-44">Let's try to find a joke for you</h4>
  </header>
);

Header.propTypes = {
  isModalOpen: T.bool.isRequired,
  toggleModalOpen: T.func.isRequired,
  className: T.string,
};

export default Header;
