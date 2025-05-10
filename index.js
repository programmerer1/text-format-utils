// text-format-utils/index.js
function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
}

function toSnakeCase(str) {
  return str
    .toLowerCase()
    .replace(/[\s-]+/g, "_")
    .replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`);
}

function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
}

module.exports = {
  toCamelCase,
  toSnakeCase,
  toKebabCase,
};
