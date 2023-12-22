const colors = require('./colors');

class prime {
  static setColor(type, color) {
    if (type === 'logs') {
      colors.logs = color;
    } else if (type === 'log' || type === 'success' || type === 'error' || type === 'warning') {
      throw new Error(`Unknown property "${type}". Cannot set property color as the default one.`);
    } else {
      colors[type] = color;
    }
  }

  static success(message) {
    if (arguments.length > 1) {
      throw new Error('The "primebit.success()" function does not accept multiple arguments.');
    }

    const type = 'success';
    const color = colors[type];
    const logType = type.toUpperCase();
    const coloredLogType = `${color}[${logType}]\x1b[0m`;
    console.log(`${coloredLogType}: ${message}`);
  }

  static error(message) {
    if (arguments.length > 1) {
      throw new Error('The "error()" function does not accept multiple arguments.');
    }

    const type = 'error';
    const color = colors[type];
    const logType = type.toUpperCase();
    const coloredLogType = `${color}[${logType}]\x1b[0m`;
    console.log(`${coloredLogType}: ${message}`);
  }

  static warning(message) {
    if (arguments.length > 1) {
      throw new Error('The "warning()" function does not accept multiple arguments.');
    }

    const type = 'warning';
    const color = colors[type];
    const logType = type.toUpperCase();
    const coloredLogType = `${color}[${logType}]\x1b[0m`;
    console.log(`${coloredLogType}: ${message}`);
  }

  static log(message) {
    if (arguments.length > 1) {
      throw new Error('The "log()" function does not accept multiple arguments.');
    }

    const type = 'logs';
    const color = colors[type];
    const logType = type.toUpperCase();
    const coloredLogType = `${color}[${logType}]\x1b[0m`;
    console.log(`${coloredLogType}: ${message}`);
  }
}

module.exports = prime;