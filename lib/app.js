const svg2jsx = require('./svg2jsx');
const makeReactComponentSkeleton = require('./makeReactComponent');
const makeMessageComponent = require('./makeMessageConponent');



const program = require('commander');

program
  .command('svg <target dir>')
  .description('svg파일을 Icon 컴포넌트로 변환시켜준다')
  .option('-p, --path [path]', '변환된 jsx가 저장될 경로', './')
  .on('--help', () => {
    console.log('');
    console.log('  Examples:');
    console.log('');
    console.log('    $ grm svg ./images -p ./src/components/Icon');
    console.log('');
  })
  .action((target, options) => {
    console.log('make grm Icon component');
    svg2jsx({
      svgPath: target,
      jsxPath: options.path
    });
  });

program
  .command('cmpnt <name>')
  .description('기본적인 component 뼈대를 만들어준다')
  .option('-t, --type [type]', '컴포넌트 타입 "class" or "function"', 'class')
  .option('-p, --path [path]', '컴포넌트가 저장될 경로', './')
  .option('-j, --jstype [jstype]', '컴포넌트 파일의 확장자', 'jsx')
  .option('-c, --csstype [csstype]', '컴포넌트 파일의 확장자', 'scss')
  .on('--help', () => {
    console.log('');
    console.log('  Examples:');
    console.log('');
    console.log('    $ grm cmpnt Input');
    console.log('    $ grm cmpnt Input -t function -p ./src/components');
    console.log('');
  })
  .action((componentName, options) => {
    console.log('make grm react component');
    console.log(`${componentName}.${options.jstype}`);
    console.log('type:', options.type === 'class' ? 'class' : 'function');

    makeReactComponentSkeleton({
      componentName: componentName,
      componentPath: options.path,
      componentType: options.type,
      componentJsExtension: options.jstype,
      componentCssExtension: options.csstype
    });
  });

program
  .command('locale <path>')
  .description('locale.json 파일을 읽어 <FomattedMessage id="[id]" defaultMessage="[message]" />를 만들어준다')
  .option('-F, --format', '메시지를 "FormatttedMessage"으로 만들어 준다')
  .option('-p, --path [path]', '만들어진 Message Component가 저장될 경로', './')
  .on('--help', () => {
    console.log('');
    console.log('  Examples:');
    console.log('');
    console.log('    $ grm locale ./src/components/Input/locale.json');
    console.log('    $ grm locale ./src/components/Input/locale.json -p ./src/components/Input');
    console.log('');
  })
  .action((path, options) => {
    console.log('make grm Message component');
    makeMessageComponent({
      localePath: path,
      resultPath: options.path,
      format: options.format
    });
  });


program.parse(process.argv);
 