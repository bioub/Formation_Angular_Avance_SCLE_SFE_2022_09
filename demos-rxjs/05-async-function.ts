const fs = require('fs/promises');

async function copy() {
  try {
    const buffer = await fs.readFile('.editorconfig');
    await fs.writeFile('.editorconfig.copy', buffer);
    console.log('Copy Done');
  } catch (err) {
    console.log(err.message);
  }
}

copy();

// ES2022 : Top Level Await
// try {
//   const buffer = await fs.readFile('.editorconfig');
//   await fs.writeFile('.editorconfig.copy', buffer);
//   console.log('Copy Done');
// } catch (err) {
//   console.log(err.message);
// }
