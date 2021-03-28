'use strict';

const events = require('./events');
const faker = require('faker');

const on ('start', startFunction)
const on ('delivered', delivered)

function startFunction() {

  setInterval(() => {
    let yourOrder = {
      storeName: faker.company.companyInfo(),
      orderId: faker.commerce.streetName(),
      customerName: faker.name.findName(),
      address: faker.address.state()
    }
    events.emit('pickup', yourOrder);
  }, 5000)

  events.on('delivered', delivered);

  function delivered(payload) {
    console.log('Thank you');
  }
}

module.exports = startFunction;