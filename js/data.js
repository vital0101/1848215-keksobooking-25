import {getRandomInteger} from './util.js';

const MIN_PRICE = 0;

const MAX_PRICE = 10000;

const RANDOM_DESCRIPTIONS = [
  'Хейтеров просьба не беспокоить.',
  'Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.',
  'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
  'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
  'Маленькая квартирка на чердаке. Для самых не требовательных.',
  'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
  'Отель для ценителей истории. Почуствуй себя героем из прошлого.', 'Отель для ценителей истории. Почуствуй себя героем из прошлого.',
  'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
  'Великолепная квартира-студия в центре Токио. Подходит как туристам, там и бизнесменам. Квартира полностью укомплектована и имеет свежий ремонт.',
];

const RANDOM_TITLES = [
  'Маленькая квартирка рядом с парком',
  'Чёткая хата', 'Небольшая лавочка в парке',
  'Уютное гнездышко для молодоженов',
  'Тихая квартирка недалеко от метро',
  'Стандартная квартира в центре',
  'Квартира студия в престижном районе',
  'Милое гнездышко для фанатов Анимэ',
  'Императорский дворец в центре Токио',
];

const RANDOM_ROOMS = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const RANDOM_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const RANDOM_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const RANDOM_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createUserAvatarSrc = (number) => {
  if(number < 10) {
    number = `0${number}`;
  }
  return `img/avatars/user${number}.png`;
};

const createRandomArrayFromArray = (count, array) => {
  const arr = [];
  for (let i = 0; i <= count - 1; i++) {
    arr.push(array[getRandomInteger(0, array.length - 1)]);
  }
  return Array.from(new Set(arr));
};

const createAdvert = () => {
  const  location = {
    lat: getRandomInteger(35.65, 35.7, 5),
    lng: getRandomInteger(139.7, 139.8, 5),
  };

  return {
    author: {
      avatar: createUserAvatarSrc(getRandomInteger(1, 10)),
    },
    offer: {
      title: RANDOM_TITLES[getRandomInteger(0, RANDOM_TITLES.length - 1)],
      address: `${location.lat}, ${location.lng}`,
      price: getRandomInteger(MIN_PRICE, MAX_PRICE),
      type: RANDOM_ROOMS[getRandomInteger(0, RANDOM_ROOMS.length - 1)],
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 10),
      checkin: RANDOM_TIMES[getRandomInteger(0, RANDOM_TIMES.length - 1)],
      checkout: RANDOM_TIMES[getRandomInteger(0, RANDOM_TIMES.length - 1)],
      features: createRandomArrayFromArray(getRandomInteger(0, RANDOM_FEATURES.length - 1), RANDOM_FEATURES),
      description: RANDOM_DESCRIPTIONS[getRandomInteger(0, RANDOM_DESCRIPTIONS.length - 1)],
      photos: createRandomArrayFromArray(getRandomInteger(0, RANDOM_PHOTOS.length - 1), RANDOM_PHOTOS),
    },
    location,
  };
};


const createAdverts = (count) => Array.from({length:count}, createAdvert);

// eslint-disable-next-line no-console


export {createAdverts};
