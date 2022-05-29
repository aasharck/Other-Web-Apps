const eventEmitter = require('events');
const { v4: uuidv4 } = require('uuid');

class Logger extends eventEmitter{
    
    log(msg){
        var today = new Date(); 
        var time = today. getHours() + ":" + today;
        this.emit('message',
            {id: uuidv4(), time, msg}
        )
    }
}


// module.exports = Logger;

const logger = new Logger();

logger.on('message', (data)=>{
    console.log(data);
})

logger.log('Hi Daaa')
logger.log('Uslkajd')