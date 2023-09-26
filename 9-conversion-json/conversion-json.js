function jsonToString(jsonData) {
   // строка, в которую будем сохранять преобразованный JSON
   let jsonString = '';
   // функция для рекурсивного обхода структуры JSON и преобразования в строку
   function stringify(obj) {
      // если значение является строкой
      if (typeof obj === 'string') {
         // обрамляем его кавычками и добавляем к строке
         jsonString += `"${obj}"`;
         // если значение является числом, булевым или null
      } else if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
         // просто добавляем его к строке
         jsonString += obj;
         // если значение является массивом
      } else if (Array.isArray(obj)) {
         // добавляем открывающую скобку
         jsonString += '[';
         // проходим по элементам массива
         for (let i = 0; i < obj.length; i++) {
            // вызываем функцию stringify для каждого элемента
            stringify(obj[i]);
            // если элемент не последний, добавляем запятую
            if (i !== obj.length - 1) {
               jsonString += ',';
            }
         }
         // добавляем закрывающую скобку
         jsonString += ']';
         // если значение является объектом
      } else if (typeof obj === 'object') {
         // добавляем открывающую скобку
         jsonString += '{';
         // получаем ключи объекта
         let keys = Object.keys(obj);
         // проходим по ключам
         for (let i = 0; i < keys.length; i++) {
            // добавляем ключ в кавычках и двоеточие
            jsonString += `"${keys[i]}":`;
            // вызываем функцию stringify для значения по ключу
            stringify(obj[keys[i]]);
            // если ключ не последний, добавляем запятую
            if (i !== keys.length - 1) {
               jsonString += ',';
            }
         }
         // добавляем закрывающую скобку
         jsonString += '}';
      }
   }
   // вызываем функцию stringify для исходного JSON
   stringify(jsonData);
   // возвращаем преобразованную строку JSON
   return jsonString;
}
const data = {
   name: 'Kirill',
   gender: 'male',
   city: 'Denver',
};
const jsonString = jsonToString(data);
console.log(jsonString);
