const MathX = { // создал переменную в которой хранится библиотека
   fibonachiNumber: function (n) { // создал функцию которая вычистяет в ряду Фибоначи N число
      let a = 1; // объявил переменную которая содержет начальное значение число ряда
      let b = 1; // объявил переменную которая содержет начальное значение число ряда
      for (let i = 3; i <= n; i++) { // с помощью цикла записываем искомое число
         let c = a + b;
         a = b;
         b = c;
      }
      return b;
   },

   fibonachiRow: function (n) { // функция для вычисления всех числел в ряду до числа N
      let fibonachiRow = [0, 1]; // переменная которая хранит начальное значение ряда Фибоначи
      let fibonachiNumber = 0;

      while (fibonachiNumber <= n) {
         fibonachiNumber = fibonachiRow[fibonachiRow.length - 1] + fibonachiRow[fibonachiRow.length - 2];
         if (fibonachiNumber <= n) {
            fibonachiRow.push(fibonachiNumber);
         }
      }
      return fibonachiRow;
   },
   isPrime: function (n) {
      if (number < 2) {
         return false;
      }
      for (let i = 2; i <= Math.sqrt(n); i++) {
         if (number % i === 0) {
            return false;
         }
      } return true;
   }, // простое или нет
   primeNumbers: function (n) {
      const primes = [];
      for (let i = 2; i <= n; i++) {
         if (isPrime(i)) {
            primes.push(i);
         }
      } return primes;
   },
};


console.log(MathX.fibonachiNumber(77));
console.log(MathX.fibonachiSeries(1000));
console.log(MathX.simpleNumber(53))
console.log(MathX.simpleNumbersSeries(20));


