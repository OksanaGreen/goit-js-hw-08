import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LocKey = 'feedback-form-state';
checkSave();
form.addEventListener(`input`, throttle(handledInput), 500);
form.addEventListener(`submit`, onSubmit);
const formInput = {};
function onSubmit(evt) {
  evt.preventDefault();
  console.log(formInput);
  evt.currentTarget.reset();
  localStorage.removeItem(LocKey);
}
function handledInput(evt) {
  evt.preventDefault();
  formInput[evt.target.name] = evt.target.value;
  formInput[evt.target.name] = evt.target.value;
  localStorage.setItem(LocKey, JSON.stringify(formInput) || 0);
}
function checkSave() {
  const savedSettings = JSON.parse(localStorage.getItem(LocKey));
  if (savedSettings) {
    const { email, message } = savedSettings;
    form.email.value = email;
    form.message.value = message;
    console.log(savedSettings);
  }
}
