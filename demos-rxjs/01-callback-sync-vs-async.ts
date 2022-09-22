// Pour exécuter cet exemple :
// npx ts-node demos-rxjs/01-callback-sync-vs-async.ts

const names = ['Romain', 'Nicolas', 'Ulrich']

// Algo qui affiche les prénoms de 6 lettres en majuscules
// donc : ROMAIN ULRICH
names.filter(function (name) { return name.length === 6 })
  .map((name) => name.toUpperCase())
  .forEach((name) => console.log(name));

// Un callback est une fonction qu'on déclare mais qui est appelée par un autre API (ici filter, map et forEach)
// Le callback est synchrone s'il est appelé par la fonction elle-même (dans la même pile d'appel)

console.log('Hello');

// Pile d'appels
// ^
// |                         lg   lg
// |cb - cb - cb   cb - cb   cb - cb
// |filter       - map     - forEach - lg
// +-------------------------------------------------> temps
//                           ROM  ULR  Hello

setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// Pile d'appels
// ^
// |
// |                             lg                  lg      lg                    lg
// |st - st - st - st - lg ..⟳.. taskB ..⟳..         taskA - taskD ..⟳..           taskC
// +-----------------------------7ms-------------------------------------------------------> temps
//                      E        B                   A       D                      C

// file d'attente (0ms) : taskB
// file d'attente (7ms) :
// file d'attente (500ms) : taskA - taskD
// file d'attente (501ms) : taskD
// file d'attente (502ms) :
// file d'attente (1000ms) : taskC
// file d'attente (1001ms) :

// Jake Archibald (Google)
// Conf JSConf.Asia 2018 -> In The Loop
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
