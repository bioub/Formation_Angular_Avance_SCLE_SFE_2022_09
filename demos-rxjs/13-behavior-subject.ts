const { mapTo } = require("rxjs/operators");

const { timer, BehaviorSubject } = require("rxjs");

function logMe() {
  return timer(3000)
    .pipe(
      mapTo({username: 'toto', isLogged: true}),
    )
}

const sub$ = new BehaviorSubject({isLogged: false});
const obs$ = logMe();

obs$.subscribe(sub$);

sub$
.subscribe({
  next: (val) => {
    console.log('next', val);
  },
  error: (err) => {
    console.log('err', err.message);
  },
  complete: () => {
    console.log('complete');
  },
});

setTimeout(() => {
  sub$
  .subscribe({
    next: (val) => {
      console.log('next', val);
    },
    error: (err) => {
      console.log('err', err.message);
    },
    complete: () => {
      console.log('complete');
    },
  });

}, 5000);


// permet d'avoir une valeur initiale
// et de la partager sur une observable qui ne complete pas
