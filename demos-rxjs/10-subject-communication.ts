const { Subject } = require('rxjs');

const sub$ = new Subject();

function component1() {
  // send data to component2
  sub$.next('from component1');
}

function component2() {
  // listen data from component1
  sub$.subscribe({
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
}


component2();
component1();

// permet aussi d'établir une communication entre 2 composants
// (comme un EventEmitter)
