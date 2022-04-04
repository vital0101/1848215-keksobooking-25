// находим форму
const advertForm = document.querySelector('.ad-form');
// находим элементы формы
const advertFormtInteractiveElements = advertForm.querySelectorAll('fieldset, button');
// находим фильтр
const mapFilterForm = document.querySelector('.map__filters');
//находим элеметны фильра
const mapFilterInteractiveElements = mapFilterForm.querySelectorAll('fieldset');

//дезактивация формы
const deactivateAdvertForm = () => {
  advertForm.classList.add('ad-form--disabled');
  advertFormtInteractiveElements.forEach((element) => element.setAttribute('disabled', 'disabled'));
};

//дезактивация фильтра
const deactivateMapFilterForm = () => {
  mapFilterForm.classList.add('map__filters--disabled');
  mapFilterInteractiveElements.forEach((element) => element.setAttribute('disabled', 'disabled'));
};

export const deactivateForms = () => {
  deactivateAdvertForm();
  deactivateMapFilterForm();
};

//активация формы
export const activateAdvertForm = () => {
  advertForm.classList.remove('ad-form--disabled');
  advertFormtInteractiveElements.forEach((element) => element.removeAttribute('disabled', 'disabled'));
};

//активация фильтра
export const activateMapFilterForm = () => {
  mapFilterForm.classList.remove('map__filters--disabled');
  mapFilterInteractiveElements.forEach((element) => element.removeAttribute('disabled', 'disabled'));
};
