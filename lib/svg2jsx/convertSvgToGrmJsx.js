const fs = require('fs');
const svg2jsx = require('@balajmarius/svg2jsx');

const template = ({ fileName, svgData }) => {
  return `import React from 'react';
import PropTypes from 'prop-types';
import IconBase from 'react-icon-base';

function ${fileName}(props) {
  return (
    ${svgData}
  );
}

${fileName}.defaultProps = {
  size: '1rem',
  color: 'currentColor',
  onClick: () => {},
  style: {},
};

${fileName}.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
};

export default ${fileName};`;
};

const convertSvgToGrmJsx = async ({ fileName, svgData }) => {
  const transformedSVG = await svg2jsx(svgData);

  return template({
    fileName,
    svgData: transformedSVG.replace('<svg', '<IconBase {...props}').replace('</svg>', '</IconBase>')
  });
}

module.exports = convertSvgToGrmJsx;