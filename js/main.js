const getRandomInteger = (min, max, maxDigits = 0) => {
  if (min > max || min < 0 || max <= 0) {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }
  return +(Math.random() * (max - min + 1) + min).toFixed(maxDigits);
};

getRandomInteger(1, 30, 2);
