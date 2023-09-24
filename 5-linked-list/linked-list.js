// функция принимает аргументом json строку
const jsonLinkedList = (json) => {
   // парсит её в объект при помощи JSON.parse
   const data = JSON.parse(json);
   //лавный узел списка с значением первого элемента массива 'data' и ссылкой на следующий узел
   const head = { value: data[0], next: null };
   let current = head;
   // в цикле создаётся новый узел с текущим значением элемента и ссылкой на след. узел
   for (let i = 1; i < data.length; i++) {
      // В процессе устанавливается ссылка на следующий узел предыдущего узла на новый узел,
      //  а текущий узел обновляется на новый узел. 
      let newNode = { value: data[i], next: null };
      current.next = newNode;
      current = newNode;
   }
   // возвращаю главный узел списка
   return head;
};

const json = '[111, 222, 333, 444, 555, 666]';
const linkedList = jsonLinkedList(json);
console.log(linkedList);