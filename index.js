const colors = require('./colors');

class prime {
  static setColor(type, color) {
    if (type === 'log') {
      throw new Error('Unknown property "log". Cannot set property color as the default one.');
    }
    colors[type] = color;
  }

  static log(string, type) {
    if (type) {
      if (type === 'logs') {
        throw new Error('Unknown property "log". Cannot set property color as the default one.');
      }
    } else {
      type = 'logs';
    }

    const color = colors[type];
    const logType = type.toUpperCase();
    const coloredLogType = `${color}[${logType}]\x1b[0m`;
    console.log(`${coloredLogType}: ${string}`);
  }
}

module.exports = prime;