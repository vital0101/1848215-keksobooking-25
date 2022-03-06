const getRandomInteger = (min, max, maxDigits = 0) => {
  if (min > max || min < 0 || max <= 0) {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }
  return +(Math.random() * (max - min) + min).toFixed(maxDigits);
};

export {getRandomInteger};
