import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LocKey = 'feedback-form';
checkSave();
form.addEventListener(`input`, throttle(handledInput), 500);
form.addEventListener(`submit`, onSubmit);

function handledInput(even) {
  even.preventDefault();
  formInput[even.target.name] = even.target.value;
  formInput[even.target.name] = even.target.value;
  localStorage.setItem(LocKey, JSON.stringify(formInput) || 0);
}
function checkSave() {
  const savedSettings = JSON.parse(localStorage.getItem(LocKey));
  console.log(savedSettings);
}

function onSubmit(even) {
  even.preventDefault();
  if (even.target.value === '') {
    console.log(even.target.value);
    return;
  }
}
even.currentTarget.reset();
localStorage.removeItem(LocKey);
console.log(formInput);
const formInput = {};

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password },
//   } = event.currentTarget;

//   if (login.value === '' || password.value === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
//
