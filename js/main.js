const getRandomInteger = (min, max, maxDigits = 0) => {
  if (min > max || min < 0 || max <= 0) {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }
  return +(Math.random() * (max - min + 1) + min).toFixed(maxDigits);
};

getRandomInteger(1, 30, 2);

const SIMILAR_ADVERT_COUNT = 3;

const user = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const userAvatar = () => {
  for (let i = 0; i < user.length; i++) {
    const userNumber = user[i];
    return `img/avatars/user${userNumber}.png`;
  }
};
const RANDOM_ROOM = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const RANDOM_TIME = ['12:00', '13:00', '14:00'];
const RANDOM_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const RANDOM_PHOTO = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

// Структура объекта

/*author, объект — описывает автора. Содержит одно поле:
avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.*/

const createAdvert = () => ({
  avatar: `img/avatars/user${userAvatar()}.png`,
  offer: {
    title: 'Лучшее место для отдыха',
    // address: `${location.lat} ', ' ${location.lng}`,
    price: getRandomInteger(1, 10),
    type: RANDOM_ROOM[getRandomInteger(0, RANDOM_ROOM.length - 1)],
    rooms: getRandomInteger(1, 10),
    guests: getRandomInteger(1, 10),
    checkin: RANDOM_TIME[getRandomInteger(0, RANDOM_TIME.length - 1)],
    checkout: RANDOM_TIME[getRandomInteger(0, RANDOM_TIME.length - 1)],
    features:RANDOM_FEATURES[getRandomInteger(0, RANDOM_TIME.length - 1)],
    description: 'Просторные комнаты, хороший вид из окна',
    photos: RANDOM_PHOTO[getRandomInteger(0, RANDOM_TIME.length - 1)],
  },
  location: {
    lat: getRandomInteger(35.65, 35.7, 5),
    lng: getRandomInteger(139.7, 139.8, 5),
  },
});

const similarAdvert = Array.from({length:SIMILAR_ADVERT_COUNT}, createAdvert);

// eslint-disable-next-line no-console
console.log(similarAdvert);
