#!/usr/bin/env node

const Table = require('table');
console.log("Called for help? here's all of prime's functions.")
const data = [
  ['Types', 'Color', 'Functions'],
  ['prime.error', 'RED', 'used for logging errors.'],
  ['prime.success', 'GREEN', 'used for logging successfull actions.'],
  ['prime.warning', 'YELLOW', 'used for loggging warning messages.'],
  ['prime.log', 'BLUE', 'used for regular log messages.']
];

const config = {
  columns: {
    0: {
      alignment: 'center',
      width: 20
    },
    1: {
      alignment: 'center',
      width: 20
    }
  }
};

const output = Table.table(data, config);
console.log(output);