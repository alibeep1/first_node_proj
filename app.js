const Logger = require('./logger');

const logger = new Logger();

logger.on('messageLogged', (eventArg) => {
    console.log('Listener called!', eventArg);
})

// emitter.emit('messageLogged', {id: 1, url: 'https://'});
logger.log('message');

