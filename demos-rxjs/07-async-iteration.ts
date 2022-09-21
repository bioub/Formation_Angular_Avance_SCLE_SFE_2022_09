// concurrent normé d'Observable

const fs = require('fs');
const readline = require('readline');

async function readLineByLine() {
  const rs = fs.createReadStream('.editorconfig');
  const lines = readline.createInterface(rs);

  for await (const line of lines) {
    console.log('line : ' + line);
  }
}

readLineByLine();

