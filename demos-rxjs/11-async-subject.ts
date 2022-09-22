const { interval, AsyncSubject } = require('rxjs');
const { map, take } = require('rxjs/operators');

function alphabet(delay = 100) {
  return interval(delay).pipe(
    map((v) => String.fromCharCode(65 + v)),
    take(26)
  );
}

const sub$ = new AsyncSubject();

const obs$ = alphabet();

obs$.subscribe(sub$);

sub$.subscribe({
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
  sub$.subscribe({
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
//               |
//            Subject
//          /         \
//       log1         st(log2, 1050)

// on partage l'opération asynchrone
// mais on ne garde que la dernière valeur au moment du complete
