'use strict'

var CodeBuilder = require('code-builder')

module.exports = function (source, opts) {
  var code = new CodeBuilder()
  console.log(source)
  return (code.join())
};

module.exports.info = {
  key: 'bugcrowd',
  title: 'Bugcrowd client',
  link: 'https://bugcrowd.com/',
  description: 'A ruby client for the Bugcrowd API',
  extname: '.rb'
};