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
    const type = 'success';
    const color = colors[type];
    const logType = type.toUpperCase();
    const coloredLogType = `${color}[${logType}]\x1b[0m`;
    console.log(`${coloredLogType}: ${message}`);
  }

  static error(message) {
    const type = 'error';
    const color = colors[type];
    const logType = type.toUpperCase();
    const coloredLogType = `${color}[${logType}]\x1b[0m`;
    console.log(`${coloredLogType}: ${message}`);
  }

  static warning(message) {
    const type = 'warning';
    const color = colors[type];
    const logType = type.toUpperCase();
    const coloredLogType = `${color}[${logType}]\x1b[0m`;
    console.log(`${coloredLogType}: ${message}`);
  }

  static log(message, type) {
    if (type) {
      if (type === 'logs') {
        throw new Error('Unknown property "logs". Cannot set property color as the default one.');
      }
    } else {
      type = 'logs';
    }

    const color = colors[type];
    const logType = type.toUpperCase();
    const coloredLogType = `${color}[${logType}]\x1b[0m`;
    console.log(`${coloredLogType}: ${message}`);
  }
}

module.exports = prime;