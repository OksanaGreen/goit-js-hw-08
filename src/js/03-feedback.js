import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LocKey = 'feedback-form';
checkSave();
form.addEventListener(`input`, throttle(handledInput), 500);
form.addEventListener(`submit`, onSubmit);

function handledInput(even) {
  even.preventDefault();
  const {
    elements: { email, message },
  } = even.target.value;
  localStorage.setItem(LocKey, JSON.stringify(elements) || 0);
}
function checkSave() {
  const savedSettings = JSON.parse(localStorage.getItem(LocKey));
  console.log(savedSettings);
}

function onSubmit(even) {
  even.preventDefault();
  if (email.value === '' || message.value === '') {
    console.log(even.target.value);
    return;
  }

  even.currentTarget.reset();
  localStorage.removeItem(LocKey);
  const form = {};
}
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
