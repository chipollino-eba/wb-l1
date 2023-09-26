const imgElement = document.querySelector('.img');
const url = 'https://www.iphones.ru/wp-content/uploads/2021/04/Yosemite.jpg';

const getUrl = async (url) => {
   try {
      const response = await fetch(url);
      const blob = await response.blob();
      const imgUrl = URL.createObjectURL(blob);
      return imgUrl;
   } catch (err) {
      console.log('Ошибка HTTP: ' + err);
   }
};

getUrl(url).then((src) => {
   imgElement.src = src;
});