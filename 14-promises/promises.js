const url = 'https://www.iphones.ru/wp-content/uploads/2021/04/Yosemite.jpg';
const img = document.querySelector('.img');

// функция checkStatus принимает объект response
const checkStage = (response) => {
   //проверяет его на статус загрузки
   if (response.ok) {
      return response;
   }
   // при ошибке загрузки, выводиться ошибка с сообщением
   const { statusText, status } = response;
   throw new Error(`${status} — ${statusText}`);
};

const getImg = (url) => {
   fetch(url)
      .then(checkStage)
      .then((response) => response.blob())
      .then((result) => {
         const imgUrl = URL.createObjectURL(result);
         img.src = imgUrl;
      })
      .catch((err) => console.error('Error:', err));
};

getImg(url);