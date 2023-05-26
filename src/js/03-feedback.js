import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LocKey = 'feedback-form';

form.addEventListener(`input`, throttle(handledInput), 500);
form.addEventListener(`submit`, onSubmit);

function handledInput(even) {
  console.log(even);
  even.preventDefault();
  const { email, message } = even.target.elements;
  console.dir(even);
  console.log(email.value);
  console.log(message.value);
  LocKey = {
    Email: email.value,
    Message: message.value,
  };
  localStorage.setItem(LocKey, JSON.stringify(elements) || 0);
}
function checkSave() {
  const savedSettings = JSON.parse(localStorage.getItem(LocKey));

  console.log(savedSettings);
}

function onSubmit(even) {
  even.preventDefault();
  even.currentTarget.reset();
  localStorage.removeItem(LocKey);
  if (email.value === '' || message.value === '') {
    return;
  }
  console.log(Email);
  console.log(Message);
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
