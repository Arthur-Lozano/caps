'use strict';

const events = require('./events');
const faker = require('faker');
const delivered = require('./caps');

let storeName = process.env.STORENAME || 'HOOBS';

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