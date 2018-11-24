var fs = require('fs');
var path = require('path');

const BASE_PATH = './components/SVGWrapper/source';
fs.readdir(path.resolve(__dirname, BASE_PATH), (err, files) => {
  const imports = [];
  const exp = [];
  for (let i in files) {
    const filename = files[i].split('.')[0];
    imports.push(`import ${filename} from './source/${filename}';`);
    exp.push(`${filename} : ${filename},`);
  }
  const defaultExp = `export default { \n${exp.join('\n')} \n}`;
  fs.writeFile(path.resolve(__dirname, './components/SVGWrapper/dict.js'), [imports.join('\n'), defaultExp].join('\n'), err => {
    console.error(err);
  });
})
