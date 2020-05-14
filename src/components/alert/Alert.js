import React from 'react';
import T from 'prop-types';

const Alert = ({type = 'info', text}) => (
  <div className={`text-center alert alert-${type}`} role="alert">
    {text}
  </div>
);

Alert.propsTypes = {
  type: T.string,
  text: T.string.isRequired,
};

export default Alert;
