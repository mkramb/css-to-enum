const camelCase = require("camelcase");

function writeTypes(stream, classes, enumName) {
  const lastIndex = classes.length - 1;

  stream.write(`export enum ${enumName} {\n`);

  classes.map((name, index) => {
    stream.write(`\t'${camelCase(name)}' = '${name}'`);

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
