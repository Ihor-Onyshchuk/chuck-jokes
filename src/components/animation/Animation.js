import React from 'react';

import T from 'prop-types';
import {CSSTransition} from 'react-transition-group';

import './Animation.scss';

const Animation = ({
  animationType,
  children,
  show,
  timeout,
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
}) => (
  <CSSTransition
    in={show}
    timeout={timeout}
    classNames={animationType}
    unmountOnExit
    onEnter={onEnter}
    onEntering={onEntering}
    onEntered={onEntered}
    onExit={onExit}
    onExiting={onExiting}
    onExited={onExited}
  >
    {children}
  </CSSTransition>
);

Animation.T = {
  animationType: T.string,
  children: T.node.required,
  onEnter: T.func,
  onEntering: T.func,
  onEntered: T.func,
  onExit: T.func,
  onExiting: T.func,
  onExited: T.func,
  show: T.bool.required,
  timeout: T.number,
};

Animation.defaultProps = {
  show: false,
  timeout: 300,
  animationType: 'fadeIn',
  onEnter: () => {
    console.log('onEnter');
  },
  onEntering: () => {
    console.log('onEntering');
  },
  onEntered: () => {
    console.log('onEntered');
  },
  onExit: () => {
    console.log('onExit');
  },
  onExiting: () => {
    console.log('onExiting');
  },
  onExited: () => {
    console.log('onExited');
  },
};

export default Animation;
