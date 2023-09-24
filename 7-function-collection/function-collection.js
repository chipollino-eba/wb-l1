// в массиве содержатся функции, которые принимают в качестве аргумента id и выводят его в консоль
const functionArray = [
   function fisrt(id) {
      return console.log(id);
   },
   function second(id) {
      return console.log(id);
   },
   function third(id) {
      return console.log(id);
   },
   function fourth(id) {
      return console.log(id);
   },
   function fifth(id) {
      return console.log(id);
   },
];

// в массиве последовательный результат вызова функций
const functionArrayResult = functionArray.map((el, id) => el(id + 1));