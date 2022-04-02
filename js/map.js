import {similarAdverts} from './card-advert.js';

// const {lat, lng} = similarAdverts[0].location; //similarAdverts[0].location доступ к элементу массива
// console.log(similarAdverts);
// console.log(similarAdverts[0].location);
// console.log(lat, lng); //получение значения свойства объекта

const formAdvert = document.querySelector('.ad-form');
const elementFormAdvert = formAdvert.children;
const formMapFilter = document.querySelector('.map__filters');
const elementMapFilter = formMapFilter.children;
const resetButton = document.querySelector('.ad-form__reset');
const address = document.querySelector('#address');


formAdvert.classList.add('.ad-form--disabled');
[...elementFormAdvert].forEach(
  (element) => {
    element.setAttribute('disabled', 'disabled');
  }
);

formMapFilter.classList.add('.map__filters--disabled');
[...elementMapFilter].forEach(
  (element) => {
    element.setAttribute('disabled', 'disabled');
  }
);

const map = L.map('map-canvas')
  .on('load', () => {
    formMapFilter.classList.remove('.map__filters--disabled');
    formAdvert.classList.remove('.ad-form--disabled');
    [...elementFormAdvert].forEach(
      (element) => {
        element.removeAttribute('disabled', 'disabled');
      }
    );
    [...elementMapFilter].forEach(
      (element) => {
        element.removeAttribute('disabled', 'disabled');
      }
    );
  })
  .setView({
    lat: 	35.6895,
    lng: 139.692,
  }, 15);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// создаем кастомную иконку

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 	35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  address.value = evt.target.getLatLng();
});

// при клике на кнопку reset карта и главный маркер возвращаются в начальное положение

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: 	35.6895,
    lng: 139.692,
  });

  map.setView({
    lat: 	35.6895,
    lng: 139.692,
  }, 15);
});

// создаем кастомную иконку

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// циклом проходим по масиву и на основе данных location создаем метки
// и добавляем на карту

similarAdverts.forEach((location) => {
  const {lat, lng} = location;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: pinIcon,
    },
  );
  marker.addTo(map).bindPopup(similarAdverts);
});

// mainPinMarker.remove();
