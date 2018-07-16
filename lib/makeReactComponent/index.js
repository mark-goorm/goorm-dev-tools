const fs = require('fs');

module.exports = ({ componentName, componentPath, componentType, componentJsExtension, componentCssExtension }) => {
  componentPath += `/${componentName}`;
  
  const templateJsxData = readTemplateJsxData({ componentType });
  const templateIndexData = fs.readFileSync(`${__dirname}/template/index.js`, 'utf8');

  const jsxData = templateJsxData.replace(/\[COMPONENT_NAME\]/gi, componentName).replace(/\[CSS_EXTENTION\]/gi, componentCssExtension);
  const indexData = templateIndexData.replace(/\[COMPONENT_NAME\]/gi, componentName);

  fs.mkdirSync(componentPath);
  fs.writeFileSync(`${componentPath}/${componentName}.${componentJsExtension}`, jsxData);
  fs.writeFileSync(`${componentPath}/${componentName}.${componentCssExtension}`, '');
  fs.writeFileSync(`${componentPath}/index.js`, indexData);
}

const readTemplateJsxData = ({ componentType }) => {
  const templateName = componentType === 'class' ? 'component.jsx' : 'component--function.jsx';
  const templateJsxData = fs.readFileSync(`${__dirname}/template/${templateName}`, 'utf8');
  
  return templateJsxData;
}