function palindrome(str) { // объявил функцию palindrome
   let left = 0; // объявил перменную с левым значение
   let right = str.length - 1; // объявил перемнную с правым значением
   for (let i = 0; i < str.length / 2; i++) { // создал цикл для сравнения значение с разных концов
      if (str[left] != str[right]) { // сравниваю левое и правые значения, если неравны -> это не палидрома, завершаем цикл
         console.log("it' s not a palindrome");
         return false;
      } else { // в других случаех сдвигаем значения, левое на 1 вперёд, правое на 1 назад пока не дойдём до середины
         left += 1;
         right -= 1;
      }
   }
   console.log("it's a palindrome"); // ура, палиндрома найдена
   return true;
}

// проверка
console.log(palindrome("hhuuhh"));
console.log(palindrome("hhuuuhh"));
console.log(palindrome("hhuuhh1"));