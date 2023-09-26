const book = {
   name: 'World and man',
   author: 'Eliot Gray',
   release: 1953,
   // в методе update принимается в качестве аргумента объект values, он содержит новые значения
   update: (values) => {
      // объявляю переменную updateBook, в которую копируется объект book
      let updateBook = { ...book };
      // Затем перебираются все свойства values и для 
      for (let value in values) {
         // каждое свойство проверяется, существует ли оно в объекте updateBook
         if (updateBook.hasOwnProperty(value)) {
            // да - значение заменяется на новое из объекта values
            updateBook[value] = values[value];
         }
      } 
      // возвращение обновленного объекта
      return updateBook;
   },
};

const newBook = book.update({ name: 'Wold and man part two', release: 2020 });
console.log(newBook);
console.log(book);