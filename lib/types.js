function writeTypes(stream, classes, enumName) {
  const lastIndex = classes.length - 1;

  stream.write(`export enum ${enumName} {\n`);

  Object.values(classes).map((item, index) => {
    stream.write(`\t'${item.key}' = '${item.value}'`);

    if (index !== lastIndex) {
      stream.write(",");
    }

    stream.write("\n");
  });

  stream.write("}");
  stream.write("\n");

  stream.end();
}

module.exports = writeTypes;
