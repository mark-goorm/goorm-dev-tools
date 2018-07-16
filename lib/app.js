const svg2jsx = require('./svg2jsx');

const program = require('commander');

program
  .command('svg <target>')
  .option('-p, --path [path]', '변환된 jsx가 저장될 경로', './')
  .action((target, options) => {
    svg2jsx({
      svgPath: target,
      jsxPath: options.path
    });
  });

program.parse(process.argv);
 