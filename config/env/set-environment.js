const fs = require('fs');
const environment = process.argv[2];
const envFileContent = require(`./${environment}.json`);

console.log('ENV ECONTENT', envFileContent);
fs.writeFileSync(
  './config/env/env.json',
  JSON.stringify(envFileContent, undefined, 2),
);
