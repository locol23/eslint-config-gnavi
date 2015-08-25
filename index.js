var path = require('path'),
  fs = require('fs'),
  stripComments = require('strip-json-comments');


module.exports = function () {
  var rc = path.resolve(process.cwd(), '.eslintrc');

  return stripComments(fs.readFileSync(rc, 'utf-8'));
};
