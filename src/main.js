const os = require("os");
const fs = require("fs");
const path = require("path");

const filename = process.env.FILENAME;

process.on("SIGINT", () => {
  console.info(`\nExiting after ${process.uptime()} seconds uptime`);
  process.exit(0);
});

function main() {
  const filepath = path.join(__dirname, "..", "data", filename);
  console.info(`Running ${os.platform()} (${os.type()}) on ${os.arch()}`);

  fs.writeFile(filepath, "some information!", (error) => {
    if (error) {
      console.error(error);
    }

    fs.readFile(filepath, "utf-8", (error, data) => {
      if (error) {
        console.error(error);
      } else {
        console.log(`File output: ${data}`);
      }
    });
  });
}

module.exports = main;
