const { interval } = require('rxjs');
const { map, take } = require('rxjs/operators');

function alphabet(delay = 100) {
  return interval(delay).pipe(
    map((v) => String.fromCharCode(65 + v)),
    take(26)
  );
}

const obs$ = alphabet();

obs$.subscribe({
  next: (letter) => {
    console.log('letter 1', letter);
  },
  error: (err) => {
    console.log('err 1', err.message);
  },
  complete: () => {
    console.log('complete 1');
  },
});

setTimeout(() => {
  obs$.subscribe({
    next: (letter) => {
      console.log('letter 2', letter);
    },
    error: (err) => {
      console.log('err 2', err.message);
    },
    complete: () => {
      console.log('complete 2');
    },
  });
}, 1050);

//           alphabet()
//         /          \
//       log1         st(log2, 1050)

// Relance l'opération asynchrone si pas de sujet
