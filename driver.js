'use strict';

const events = require('./events');

events.on('pickup', grabItem);
events.on('inTransit', inTransit);
// events.on('inTransit', inTransit);

function grabItem(payload) {
  setTimeout(() => {
    consoleg.log(`Driver: picked up ${payload}`);
    events.emit('intransit', payload);
    console.log('delivered');
    events.emit('delivered')
  }, 3000)
}

function inTransit(payload) {
  setTimeout(() => {
    consoleg.log(`Driver: picked up ${payload}`);
    events.emit('intransit', payload);
    console.log('delivered');
    events.emit('delivered')
  }, 3000)
}

module.exports = events;