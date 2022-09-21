const fs = require('fs');

// Sync: tant que le fichier n'a été lu, le thread est bloqué sur la ligne readFileSync
try {
  const buffer = fs.readFileSync('.editorconfig');
  fs.writeFileSync('.editorconfig.copy', buffer);
  console.log('Copy Done');
} catch (err) {
  console.log(err.message);
}

// Async: au moment du readFile, le thread est libéré donc disponible pour traiter une autre tache
// quand le fichier aura été lu, si la pile est vide le callback est appelée (sinon file d'attente)

// -> Callback Hell / Pyramid of Doom
fs.readFile('.editorconfig', (err, buffer) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.writeFile('.editorconfig.copy', buffer, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log('Copy Done');
      }
    });
  }
});
