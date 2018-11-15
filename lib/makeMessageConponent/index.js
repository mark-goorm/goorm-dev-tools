const fs = require('fs');

const getMessageComponentString = (id, text) => {
  return `<FormattedMessage id="${id}" defaultMessage="${text}" />`;
};

const getMessageComponentStringbyIntl = (id, text) => {
	return `this.props.intl.formatMessage({ id:"${id}", defaultMessage:"${text} "})`;
}

module.exports = ({ localePath, resultPath, format }) => {
  const localeData = fs.readFileSync(localePath, 'utf8');
  const localeJson = JSON.parse(localeData);

  let componentsString = '';
  for (var key in localeJson.ko) {
    console.log(key, localeJson.ko[key]);
	  if(format)componentsString += getMessageComponentString(key, localeJson.ko[key]) + '\n';
    else componentsString += getMessageComponentStringbyIntl(key, localeJson.ko[key]) + '\n';
  }

  console.log(componentsString);
  fs.writeFileSync(`${resultPath}/MessageComponents.jsx`, componentsString);
};