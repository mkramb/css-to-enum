const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");

const getClasses = require("./styles");
const writeTypes = require("./types");

function convert(input, output, enumName) {
  const inputPath = path.resolve(process.cwd(), input);
  const outputPath = path.resolve(process.cwd(), output);

  rimraf.sync(outputPath);

  const classes = getClasses(fs.readFileSync(inputPath));
  const stream = fs.createWriteStream(outputPath);

  stream.once("open", () => writeTypes(stream, classes, enumName));
  stream.once("close", () => console.log("Done 💥"));
}

module.exports = convert;
