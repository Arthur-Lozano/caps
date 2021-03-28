'use strict';


//Main Hub Application
//The brain

const Event = require('events');
let events = Event();

require('./vendor');
require('./driver');


events.emit(start);

events.on(pickup)
events.on(inTransit)
events.on(delivered)

