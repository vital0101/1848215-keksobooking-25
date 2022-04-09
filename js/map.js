import { createAdverts } from './data.js';
// import { getData } from './api.js';
import { validateFormAdvert } from './form-validate.js';
import { slider } from './slider.js';
import { createCard } from './card-advert.js';
import { activateAdvertForm, activateMapFilterForm } from './page-states.js';
import { addPhotoInputsListeners, clearImageBlocks } from './preload-images.js';

const START_LOCATION = {
  lat: 	35.68172,
  lng: 139.75392,
};
const DECIMALS = 5;
const ADVERTS_COUNTER = 20;
const adverts = createAdverts(ADVERTS_COUNTER);
const resetButton = document.querySelector('.ad-form__reset');
const addressInput = document.querySelector('#address');
const interactiveMap = L.map('map-canvas');
const markerGroup = L.layerGroup();
let interactiveMarker;
let marker;

const setStartAddressValue = () => {
  addressInput.value = `${START_LOCATION.lat}, ${START_LOCATION.lng}`;
};

const setLocatin = (target) => {
  const location = target.getLatLng();
  addressInput.value = `${location.lat.toFixed(DECIMALS)}, ${location.lng.toFixed(DECIMALS)}`;
};

const addMarkerGroup = (data) => {
  markerGroup.addTo(interactiveMap);
  data.forEach((offer) => {
    marker = L.marker(
      offer.location,
      {
        icon: L.icon({
          iconUrl: './img/pin.svg',
          iconSize: [40, 40],
          iconAnchor: [20, 40],
        }),
      },
    );
    marker
      .addTo(markerGroup)
      .bindPopup(createCard(offer));
  });
};

const onMarkerMove = (evt) => setLocatin(evt.target);

const onResetButtonClick = () => {
  setTimeout(() => setStartAddressValue());
  clearImageBlocks();
};

const activateAddForm = () => {
  activateAdvertForm();
  setStartAddressValue();
  validateFormAdvert();
  slider();
  addPhotoInputsListeners();
  resetButton.addEventListener('click', onResetButtonClick);
};

export const initMap = () => {
  interactiveMap.on('load', () => {
    activateAddForm();
    activateMapFilterForm();
    setStartAddressValue();
    addMarkerGroup(adverts);
  })
    .setView(START_LOCATION, 15);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      foo: 'bar',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(interactiveMap);

  interactiveMarker = L.marker(START_LOCATION,
    {
      draggable: 'true',
      icon:  L.icon({
        iconUrl: './img/main-pin.svg',
        iconSize: [52, 52],
        iconAnchor: [26, 52],
      }),
    }).addTo(interactiveMap);

  interactiveMarker.on('moveend', onMarkerMove);
};
