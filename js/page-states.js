const advertForm = document.querySelector('.ad-form');
const advertFormtInteractiveElements = advertForm.querySelectorAll('fieldset, button');
const mapFilterForm = document.querySelector('.map__filters');
const mapFilterInteractiveElements = mapFilterForm.querySelectorAll('fieldset');

const deactivateAdvertForm = () => {
  advertForm.classList.add('ad-form--disabled');
  advertFormtInteractiveElements.forEach((element) => element.setAttribute('disabled', 'disabled'));
};

const deactivateMapFilterForm = () => {
  mapFilterForm.classList.add('map__filters--disabled');
  mapFilterInteractiveElements.forEach((element) => element.setAttribute('disabled', 'disabled'));
};

export const deactivateForms = () => {
  deactivateAdvertForm();
  deactivateMapFilterForm();
};

export const activateAdvertForm = () => {
  advertForm.classList.remove('ad-form--disabled');
  advertFormtInteractiveElements.forEach((element) => element.removeAttribute('disabled', 'disabled'));
};

export const activateMapFilterForm = () => {
  mapFilterForm.classList.remove('map__filters--disabled');
  mapFilterInteractiveElements.forEach((element) => element.removeAttribute('disabled', 'disabled'));
};
