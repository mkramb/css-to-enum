#!/usr/bin/env node

const program = require("commander");
const package = require("../package.json");
const main = require("../lib/main");

program
  .version(package.version)
  .option("-i, --input <n>", "input Styesheet file")
  .option("-o, --output <n>", "ouput TypeScript Enum")
  .option("-e, --enum <n>", "typeScript Enum name", "Styles")
  .parse(process.argv);

if (program.input && program.output) {
  main(program.input, program.output, program.enum);
}
