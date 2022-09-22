const { map, take } = require("rxjs/operators");

const { interval, ReplaySubject } = require("rxjs");

function alphabet(delay = 100) {
  return interval(delay).pipe(
    map((v) => String.fromCharCode(65 + v)),
    take(26)
  );
}

const sub$ = new ReplaySubject(3);
const obs$ = alphabet();

obs$.subscribe(sub$);

sub$
.subscribe({
  next: (val) => {
    console.log('next 1', val);
  },
  error: (err) => {
    console.log('err 1', err.message);
  },
  complete: () => {
    console.log('complete 1');
  },
});

setTimeout(() => {
  sub$
  .subscribe({
    next: (val) => {
      console.log('next 2', val);
    },
    error: (err) => {
      console.log('err 2', err.message);
    },
    complete: () => {
      console.log('complete 2');
    },
  });

}, 4000);


// permet d'avoir une valeur initiale
// et de la partager sur une observable qui ne complete pas
