#!/usr/bin/env node

const program = require("commander");
const package = require("../package.json");
const main = require("../lib/main");

program
  .version(package.version)
  .option("-i, --input <n>", "Input Styesheet file")
  .option("-o, --output <n>", "Ouput TypeScript Enum")
  .option("-o, --enum <n>", "TypeScript Enum name", "Styles")
  .parse(process.argv);

if (program.input && program.output) {
  main(program.input, program.output, program.enum);
}
