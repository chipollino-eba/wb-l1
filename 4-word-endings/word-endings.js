// функция принимает число и массив слов
function getNoun(num, wordsArray) {
   // отрицательно число преобразовываем в положительное, чтобы пройти проверки
   let number = Math.abs(num);
   // берется остаток деления на 100
   number %= 100;
   // если находится в определенном промежутке, то возвращается определенная форма слова из массива
   if (number >= 5 && number <= 20) {
      return wordsArray[2]
   }
   number %= 10;
   if (number === 1) {
      return wordsArray[0]
   }
   if (number >= 2 && number <= 4) {
      return wordsArray[1]
   }
   // Если число равно 0
   return wordsArray[2];
}
let users = ['пользователь', 'пользователей', 'пользователя']
let plates = ['машина', 'машины', 'машин']
console.log(getNoun(2, plates))