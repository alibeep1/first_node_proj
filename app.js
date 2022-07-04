const { default: getMAC } = require('getmac');
console.log('Mac address: ' + getMAC());

//instantiating a module or 'class')
const log = require('./logger.js');


//view components of the module!
log('Hey there');