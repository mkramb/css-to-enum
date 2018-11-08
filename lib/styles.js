const csstree = require("css-tree");
const camelCase = require("camelcase");

const clean = name => name.replace(/\/|\\/g, "");
const normalize = name => camelCase(name.replace(/:/g, "-"));

function getClasses(content) {
  const ast = csstree.parse(content);
  const classes = {};

  csstree.walk(ast, function(node) {
    if (node.type === "ClassSelector") {
      const name = clean(node.name);

      if (!classes.hasOwnProperty(name)) {
        classes[name] = {
          key: normalize(name),
          value: name
        };
      }
    }
  });

  return classes;
}

module.exports = getClasses;
