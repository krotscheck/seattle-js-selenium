// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

const os = require('os');

// Resolve the public network interface for this host.
const interfaces = os.networkInterfaces();
let hostIP = Object.keys(interfaces)
  .map((name) => interfaces[name])
  .reduce((prev, current) => prev.concat(current), [])
  .filter((item) => item.family === 'IPv4' && !item.internal)
  .map((item) => item.address)[0];

module.exports = hostIP;
