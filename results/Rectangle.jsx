import React from 'react';
import PropTypes from 'prop-types';
import IconBase from 'react-icon-base';

function Rectangle(props) {
  return (
    <IconBase {...props} width="400" height="110"><rect width="300" height="100" fill="#00f" strokeWidth="3" stroke="#000"/></IconBase>
  );
}

Rectangle.defaultProps = {
  size: '1rem',
  color: 'currentColor',
  onClick: () => {},
  style: {},
};

Rectangle.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
};

export default Rectangle;