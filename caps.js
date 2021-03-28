'use strict';


//Main Hub Application
//The brain
require('./driver');
require('./vendor');

const events = require('events');



function pickUp(payload) {
  setTimeout(() => {
    console.log(`Driver: picked up ${payload}`);
    events.emit('pickup', pickUp);
  }, 1000)
}


function inTransit(payload) {
  setTimeout(() => {
    console.log('inTransit');
    events.emit('insTransit', inTransit)
  }, 3000)
}

function delivered(payload) {
  setTimeout(() => {
    console.log('delivered');
    events.emit('delivered', delivered)
  }, 3000)
}


module.exports = events;






