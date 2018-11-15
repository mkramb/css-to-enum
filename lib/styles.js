const csstree = require("css-tree");

const clean = name => name.replace(/\/|\\/g, "");
const normalize = name => {
  return name
    .replace(/%/g, "P")
    .replace(/:/g, "-")
    .replace(/--/g, "__")
    .replace(/-/g, "_")
    .replace(/\W/g, "");
};

function getClasses(content) {
  const ast = csstree.parse(content);
  const classes = {};

  csstree.walk(ast, node => {
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
