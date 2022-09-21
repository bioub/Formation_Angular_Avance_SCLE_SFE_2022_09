// fs.readFile('.editorconfig', (err, buffer) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     fs.writeFile('.editorconfig.copy', buffer, (err) => {
//       if (err) {
//         console.log(err.message);
//       } else {
//         console.log('Copy Done');
//       }
//     });
//   }
// });

const fs = require('fs/promises');

// fs.readFile('.editorconfig')
//   .then((buffer) => {
//     fs.writeFile('.editorconfig.copy', buffer)
//       .then(() => {
//         console.log('Copy Done');
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// fs.readFile('.editorconfig')
//   .then((buffer) => {
//     return fs.writeFile('.editorconfig.copy', buffer);
//   })
//   .then(() => {
//     console.log('Copy Done');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

fs.readFile('.editorconfig')
  .then((buffer) => fs.writeFile('.editorconfig.copy', buffer))
  .then(() => console.log('Copy Done'))
  .catch((err) => console.log(err.message));
