const os = require('os');

const filename = process.env.FILE_NAME;

process.on('SIGINT', () => {
  console.info(`\nExiting after ${process.uptime()} seconds uptime`);
  process.exit(0);
});

function main() {
    console.info(`Running ${os.platform()} (${os.type()}) on ${os.arch()}`)
    setTimeout(() => {}, 10000);
}

module.exports = main;
