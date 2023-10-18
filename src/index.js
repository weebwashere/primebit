const colors = require('./colors');

class primebit {
  static setColor(type, color) {
    colors[type] = color;
  }

  static log(string, type = 'logs') {
    if (!colors[type]) {
      throw new Error(`Unknown property: ${type}`);
    }

    const logType = type.toUpperCase();
    const coloredLogType = `${colors[type]}[${logType}]\x1b[0m`;
    console.log(`${coloredLogType}: ${string}`);
  }
}
module.exports = primebit;
