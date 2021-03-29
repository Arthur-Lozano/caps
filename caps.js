'use strict';


//Main Hub Application
//The brain
require('./driver');
require('./vendor');


const events = require('./events');


events.emit('start');
events.on('driver', (payload) => {
  events.emit('driver', payload)
});








