//simulate logging messages in the cloud

//endpoint
var url = 'http://mylogger.io/log';

function log(message){
    // Send http request
    console.log(message);
}

module.exports = log;