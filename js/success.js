import {resetMap, setStartAddressValue} from './map.js';
import {clearImageBlocks} from './preload-images.js';
import {isEcsEvt, renderElement} from './utils.js';

const addForm = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');
const sliderElement = document.querySelector('.ad-form__slider');

const createSuccessTemplate = () => `<div class="success">
                                      <p class="success__message">Ваше объявление<br>успешно размещено!</p>
                                    </div>`;


const onSuccessClick = (evt) => {
  evt.preventDefault();
  if (evt.target.closest('.success')) {
    evt.target.closest('.success').remove();
    removeListeners();
  }
};

const onSuccessKeydown = (evt) => {
  evt.preventDefault();
  const successElement = document.querySelector('.success');
  if (isEcsEvt(evt) && successElement) {
    successElement.remove();
    removeListeners();
  }
};

const addListeners = () => {
  document.addEventListener('click', onSuccessClick);
  document.addEventListener('keydown', onSuccessKeydown);
};

const renderSuccessMessage = () => {
  renderElement(document.body, createSuccessTemplate);
  addListeners();
  resetMap();
  setStartAddressValue();
  clearImageBlocks();
  setTimeout(() => {
    addForm.reset();
    filterForm.reset();
    sliderElement.noUiSlider.reset();
  });
};

export {renderSuccessMessage};
