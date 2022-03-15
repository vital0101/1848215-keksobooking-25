import { createAdverts } from './data.js';

const TYPES_OF_HOUSING = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};


const similarAdvertList = document.querySelector('#map-canvas');

const advertTemplate = document.querySelector('#card').content;

const advertCard = advertTemplate.querySelector('.popup');

const featuresContainer = advertCard.querySelector('.popup__features');

const featuresList = featuresContainer.querySelectorAll('.popup__feature');

const similarAdverts = createAdverts(1);


similarAdverts.forEach((advert) => {
  const advertElement = advertCard.cloneNode(true);

  advertElement.querySelector('.popup__avatar').src = advert.author.avatar;

  advertElement.querySelector('.popup__title').textContent = advert.offer.title;

  advertElement.querySelector('.popup__text--address').textContent = `${advert.location.lat} ${advert.location.lng}`;

  advertElement.querySelector('.popup__text--price').textContent = `${advert.offer.price} ₽/ночь`;

  advertElement.querySelector('.popup__text--time').textContent = `Заезд после ${advert.offer.checkin} , выезд до ${advert.offer.checkout}`;

  advertElement.querySelector('.popup__text--capacity').textContent = `${advert.offer.rooms} комнаты для ${advert.offer.guests} гостей`;

  advertElement.querySelector('.popup__type').textContent = TYPES_OF_HOUSING[advert.offer.type];

  advertElement.querySelector('.popup__photo').src = advert.offer.photos;

  advertElement.querySelector('.popup__description').textContent = advert.offer.description;

  // должно перебирать массив и удалять те элементы, класс которых не обнаружен
  // не работает
  featuresList.forEach((featureListItem) => {
    const renderFeatures = advert.offer.features;

    const isNecessary = renderFeatures.some(
      (featureElement) => featureListItem.classList.contains(`popup__feature--${featureElement}`),
    );

    if (!isNecessary) {
      featureListItem.remove();
    }
  });


  similarAdvertList.appendChild(advertElement);
});
