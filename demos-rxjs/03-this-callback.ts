class User {
  name = 'Romain'
  hello() {
    setTimeout(function () { // this est un object Timeout de Node.js
      console.log('Hello ' + this.name);
    }, 1000);
    setTimeout(() => { // this n'est pas créé (donc c'est le this du dessus/hello)
      console.log('Hello ' + this.name);
    }, 1000);
  }
}

const romain = new User();
romain.hello();
