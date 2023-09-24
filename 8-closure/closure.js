// в массиве содержатся функции, которые принимают в качестве аргумента id и выводят его в консоль
const functionArray = [
   function fisrt(id) {
      return id;
   },
   function second(id) {
      return id;
   },
   function third(id) {
      return id;
   },
   function fourth(id) {
      return id;
   },
   function fifth(id) {
      return id;
   },
];

// функция mainFunction принимает аргументом массив функций
const mainFunction = (arr) => {
   //объявляется переменная result в которой создается функция, в которой создается массив состоящий 
   //из результатов вызова функций внутри массива functionArray
   const result = () => arr.map((fn, id) => fn(id + 5));
   return result;
};

console.log(mainFunction(functionArray)());