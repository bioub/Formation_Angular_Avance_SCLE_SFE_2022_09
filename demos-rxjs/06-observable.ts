const { Observable } = require('rxjs');

function timeout(delay: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

// setTimeout(() => {}, 1000);
timeout(1000).then(() => {
  console.log('1s timeout');
})
// await timeout(1000);


function intervalP(delay: number) {
  return new Promise<void>((resolve) => {
    setInterval(() => {
      resolve();
    }, delay);
  });
}

intervalP(1000).then(() => {
  console.log('1s interval');
})

// La Limite principale de Promise est que le callback ne peut s'exécuter qu'une fois
// Les APIs suivant ne peuvent pas utiliser Promise
// addEventListener
// setInterval
// WebSockets
// Worker
// requestAnimationFrame

// Une solution -> Observable
function interval$(delay: number) {
  return new Observable((subcriber) => {
    setInterval(() => {
      subcriber.next();
    }, delay);
  });
}

interval$(1000).subscribe({
  next() {
    console.log('next', '1s observable');
  },
  error(err) {
    console.log('err', err.message);
  },
  complete() {
    console.log('complete');
  },
});

