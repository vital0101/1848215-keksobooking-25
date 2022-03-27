const formAdvertValidation = document.querySelector('.ad-form');

const pristine = new Pristine(
  formAdvertValidation,
  {
    classTo: 'ad-form__element',
    errorTextParent: 'ad-form__element',
    errorTextClass: 'ad-form__element--error-text',
  }
);

const elementTitleAdvert = formAdvertValidation.querySelector('#title');
const validateTitleAdvert = (value) => value.length < 30 && value.length > 100;
const getErrorTextTitle = () => 'От 30 до 100 символов';

pristine.addValidator(
  elementTitleAdvert,
  validateTitleAdvert,
  getErrorTextTitle,
);

// выбор поля валидации
const elementTypeRoom = formAdvertValidation.querySelector('#type');
const elementPriceRoom = formAdvertValidation.querySelector('#price');
const minPriceHousing = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};
// условие валидации поля price
const validatePriceAdvert = () => elementPriceRoom.value > minPriceHousing[elementTypeRoom.value];
elementTypeRoom.addEventListener('change', () => {
  elementPriceRoom.placeholder = minPriceHousing[elementTypeRoom.value];
  elementPriceRoom.min = minPriceHousing[elementTypeRoom.value];
});
const getTextErrorPrice = () => `Минимальная цена ${minPriceHousing[elementTypeRoom.value]}`;
pristine.addValidator(
  elementPriceRoom,
  validatePriceAdvert,
  getTextErrorPrice,
);


// просто хрень честно говоря, попытка написать хоть что то
// const validateTimeIn = formAdvertValidation.querySelector('#timein');
// const valueTimeIn = validateTimeIn.querySelectorAll('option');
// console.log(validateTimeIn[1]);
// const validateTimeOut = formAdvertValidation.querySelector('#timeout');
// console.log(valueTimeIn);
// const valueTimeOut = validateTimeOut.querySelectorAll('option');
// console.log(validateTimeIn[1]);

// validateTimeIn.addEventListener('change', () => {
//   for (let i = 0; i < validateTimeIn.length; i++) {
//     if(valueTimeIn[i] === valueTimeOut[i]) {
//       valueTimeOut.setAttribute('selected', true);
//       return;
//     }
//   }
// });

formAdvertValidation.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
