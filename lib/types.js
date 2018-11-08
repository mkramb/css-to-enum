const camelCase = require("camelcase");
const normalize = name => camelCase(name.replace(/:/g, '-');

function writeTypes(stream, classes, enumName) {
  const lastIndex = classes.length - 1;  

  stream.write(`export enum ${enumName} {\n`);

  classes.map((name, index) => {
    stream.write(`\t'${normalize(name)}' = '${name}'`);

    if (lastIndex !== index) {
      stream.write(",");
    }

    stream.write("\n");
  });

  stream.write("}");
  stream.write("\n");

  stream.end();
}

module.exports = writeTypes;
