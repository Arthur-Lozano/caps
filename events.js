'use strict';



//Global Event Pool
//driver and vendor share from this pool
const Events = require('events');
const events = new Events();


module.exports = events;

