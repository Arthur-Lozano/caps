'use strict';

const events = require('./events');
require('console-stamp')(console, '[HH:MM:ss.l]');


events.on('pickup', pickUp);
events.on('inTransit', inTransit);


// events.on('inTransit', inTransit);

function pickUp(payload) {
  setTimeout(() => {
    console.log('inTransit', payload);
    events.emit('inTransit', payload);
  }, 1000)
  setTimeout(() => {
    console.log('delivered');
    events.emit('delivered', payload);
  }, 3000)
}

function inTransit(payload) {
  console.log('In Transit', payload);
}

// function delivered(payload) {
//   setTimeout(() => {
//     console.log('delivered', payload);
//   }, 3000)
// }




