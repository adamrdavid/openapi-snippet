'use strict'

const CodeBuilder = require('../node_modules/httpsnippet/src/helpers/code-builder')
const Pluralize = require('pluralize')

module.exports = function (source, opts) {
  const resource = source.uriObj.pathname.split('/')[1]
  const id = source.uriObj.pathname.split('/')[2]
  const code = new CodeBuilder('  ')

  let method_name, options

  code.blank().push("require 'crowdcontrol'").blank()
    .push('CrowdControl.config.username = TOKEN_USERNAME')
    .push('CrowdControl.config.password = TOKEN_PASSWORD')
    .blank()
  if (id) {
    method_name = Pluralize.singular(resource)
    options = "'10000000-0000-0000-0000-000000000000', params: params"
  } else {
    method_name = resource
    options = 'params: params'
  }
  code.push(`CrowdControl.${method_name}(${options})`)
  console.log('logging source', source)
  console.log('logging resource name', resource)
  console.log('logging code:: ', code.join());
  return (code.join())
};

module.exports.info = {
  key: 'bugcrowd',
  title: 'Bugcrowd client',
  link: 'https://bugcrowd.com/',
  description: 'A ruby client for the Bugcrowd API',
  extname: '.rb'
};