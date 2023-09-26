// функция принимает объект JSON и рекурсивно обрабатывает его свойства и значения
function convertJSONToString(json) {
   // если значение является строкой, оно обертывается в двойные кавычки
   if (typeof json === 'string') {
      return `"${json}"`;
      // если значение является числом, логическим значением или `null`, оно преобразуется в строку с помощью String()
   } else if (typeof json === 'number' || typeof json === 'boolean' || json === null) {
      return String(json);
      // если значение является массивом, каждый элемент рекурсивно обрабатывается и результаты объединяются в строку с помощью join(',')
   } else if (Array.isArray(json)) {
      const elements = json.map(element => convertJSONToString(element));
      return `[${elements.join(',')}]`;
   } else if (typeof json === 'object') {
      const properties = Object.keys(json).map(key => `"${key}":${convertJSONToString(json[key])}`);
      return `{${properties.join(',')}}`;
   }
}

const data = {
   name: 'Kirill',
   age: 25,
   isStudent: false,
   work: ['digger'],
   address: {
      street: 'West 9th Avenue',
      city: 'Denver'
   }
};
const jsonString = convertJSONToString(data);
console.log(jsonString);