# text-format-utils

A simple JavaScript library for formatting text strings into camelCase, snake_case, and kebab-case.

## Installation
```bash
npm install text-format-utils

## Usage

const { toCamelCase, toSnakeCase, toKebabCase } = require('text-format-utils');

console.log(toCamelCase("hello world")); // helloWorld
console.log(toSnakeCase("HelloWorld")); // hello_world
console.log(toKebabCase("hello_world")); // hello-world
