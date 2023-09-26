function externalFunction() {
   //Переменная во внешней функции
   let counter = 0;
   return function count() {
      // Внутреняя функция обращается к переменной за пределами своего окружения
      return counter++
   }
}

let firstCall = externalFunction() // создает собственное окружение

let secondCall = externalFunction()

console.log(firstCall(), 'first')
console.log(firstCall(), 'first')
console.log(firstCall(), 'first')
console.log(secondCall(), 'second')
console.log(secondCall(), 'second')
console.log(secondCall(), 'second')