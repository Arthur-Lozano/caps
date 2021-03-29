'use strict';

const { beforeAll, jest, afterAll } = require("@jest/globals");
const { describe } = require("yargs");

const MESSAGE_DELAY = 3000;

let yourOrder = {
  storeName: faker.company.companyName(),
  orderId: faker.commerce.department(),
  customerName: faker.name.findName(),
  address: faker.address.state()
}

describe('Tests the queue', () => {
  it('Can successfully enqueue into a queue', () => {
    q.enqueue(100);

    expect(q.storage).toEqual([100]);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);

    expect(q.storage).toEqual([100, 10, 20, 30]);
  });