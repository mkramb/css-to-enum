const csstree = require("css-tree");
const clean = name => name.replace(/\/|\\/g, "");

function getClasses(content) {
  const ast = csstree.parse(content);
  const classes = [];

  csstree.walk(ast, function(node) {
    if (node.type === "ClassSelector" && classes.indexOf(node.name) === -1) {
      classes.push(clean(node.name));
    }
  });

  return classes;
}

module.exports = getClasses;
