// функция принимает аргументом массив объектов пользователей 'person'
const person = [
   { name: 'Vadim', age: 26 },
   { name: 'Vladislav', age: 25 },
   { name: 'Nikita', age: 26 },
   { name: 'Dariya', age: 18 },
   { name: 'Valeriya', age: 18 },
   { name: 'Anastasiya', age: 20 },
];

const sorting = (person) => {
   // в copy скопировали массив person
   const copy = [...person];
   // возвращяем копию отсортированного copy где сортировка идёт по возрасту
   return copy.sort((a, b) => {
      // если возраст идентичен - по алфавиту
      return a.age === b.age ? a.name.localeCompare(b.name) : a.age - b.age;
   });
};

console.log(sorting(person));