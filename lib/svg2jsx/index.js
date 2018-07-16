const convertSvgToGrmJsx = require('./convertSvgToGrmJsx.js');
const fs = require('fs');

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createConvertedJsxFile = ({svgPath, jsxPath}) => {
 fs.readdir(svgPath, (err, files) => {
    files.forEach(async filePath => {
      const fileName = capitalizeFirstLetter(filePath.split('.')[0]);
      const svgData = fs.readFileSync(`${svgPath}/${filePath}`, 'utf8');
      const grmJsx = await convertSvgToGrmJsx({ fileName, svgData });
      fs.writeFileSync(
        `${jsxPath}/${fileName}.jsx`,
        grmJsx
      );
      console.log(`${svgPath}/${fileName} => ${jsxPath}/${fileName}`);
    });
  }); 
}

module.exports = createConvertedJsxFile;