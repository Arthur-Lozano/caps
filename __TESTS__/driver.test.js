'use strict';

const { beforeAll, jest, afterAll } = require("@jest/globals");
const { describe } = require("yargs");

const MESSAGE_DELAY = 3000;

describe('(Container) Message', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    //Restoring the status quos
    jest.useRealTimers()
  })
})