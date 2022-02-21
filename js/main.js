/*
Задача №1:
Создать функцию, возвращающую случайное целое число из переданного диапазона "от"..."до" включительно.
Диапазон только положительный, включая 0.
"до" не должно быть <= 0.

имя_функции(от, до);
Результат: целое число из диапазона "от...до"
*/

function getRandomInteger(min, max){
  if (min > max || min < 0 || max <= 0) {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInteger(2, 5);


/*
Задача №2:
Создать функцию, возвращающую случайное число с плавающей точкой из переданного диапазона "от"..."до" включительно.
Диапазон только положительный, включая 0.
"до" не должно быть <= 0.

имя_функции(от, до, количество_знаков_после_запятой);
Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
*/

// Первый вариант

function getRandomFloat(min, max, maxDigits = 0) {

  if (min >= max || min < 0 || max <= 0) {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }
  const digitsDegree = 10 ** maxDigits;
  return Math.floor(((Math.random() * (max - min + 1) + min)) * digitsDegree) / digitsDegree;

}

getRandomFloat(1, 30, 2);

// Второй вариант

/*
function getRandomFloat(min, max, maxDigits = 0) {

  if (min >= max || min < 0 || max <= 0) {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }
  const randomNumber = Math.random() * (max - min + 1) + min;
  const randomNumberFloat = +randomNumber.toFixed(maxDigits);
  return randomNumberFloat;
}

getRandomFloat(1, 30, 2);
*/
