'use strict';

const events = require('./events');

events.on('driver', pickUp);
events.on('driver', inTransit);
events.on('driver', delivered);

// events.on('inTransit', inTransit);

function pickUp(payload) {
  setTimeout(() => {
    console.log(`Driver: picked up ${payload}`);
    events.emit('intransit', payload);
  }, 1000)
}

function inTransit(payload) {
  setTimeout(() => {
    console.log('driver');
    events.emit('driver', pickUp)
  }, 3000)
}

function delivered(payload) {
  setTimeout(() => {
    console.log('delivered');
    events.emit('delivered', delivered)
  }, 3000)
}

pickUp(100);
events.emit('driver')

module.exports = events;