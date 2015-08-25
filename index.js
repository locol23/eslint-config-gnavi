var path = require('path'),
  fs = require('fs'),
  stripComments = require('strip-json-comments');

var rc = path.resolve(__dirname, '.eslintrc');

module.exports = JSON.parse(stripComments(fs.readFileSync(rc, 'utf-8')));

