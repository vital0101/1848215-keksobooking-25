const formAdvertValidation = document.querySelector('.ad-form');

const pristine = new Pristine(formAdvertValidation, {
  classTo: 'ad-form__element',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'form__item',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
},
);

// выбор поля валидации
const elementTitleAdvert = formAdvertValidation.querySelector('#title');

// условие валидации
function validateTitleAdvert (value) {
  return value.length >= 30 && value.length <= 100;
}

pristine.addValidator(
  elementTitleAdvert,
  validateTitleAdvert,
  'От 30 до 100 символов',
);

// выбор поля валидации
const elementPriceRoom = formAdvertValidation.querySelector('#price');

// условие валидации
function validatePriceAdvert (value) {
  return value.max > 100000;
}

pristine.addValidator(
  elementPriceRoom,
  validatePriceAdvert,
  'Максимальная сумма 100000',
);

formAdvertValidation.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
