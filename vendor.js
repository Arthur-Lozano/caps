'use strict';

const events = require('./events');
const faker = require('faker');

let storeName = process.env.STORENAME || 'HOOBS';

events.on('delivered', delivered);
events.on('start', startFunction);


function startFunction() {
  setInterval(() => {
    let yourOrder = {
      storeName: faker.company.companyName(),
      orderId: faker.commerce.department(),
      customerName: faker.name.findName(),
      address: faker.address.state()
    }
    console.log('your order', yourOrder);
    events.emit('pickup', yourOrder);
  }, 5000)

}

function delivered(payload) {
  console.log('Thank you');
}
module.exports = startFunction;
