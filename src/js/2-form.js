const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;

const localStorageKey = 'feedback-form-state';

form.addEventListener('submit', handlerSubmit);

const feedbackFormStateJson = localStorage.getItem(localStorageKey);

if (feedbackFormStateJson) {
  const feedbackFromState = JSON.parse(feedbackFormStateJson);
  emailInput.value = feedbackFromState.email;
  messageTextarea.value = feedbackFromState.message;
  formData.email = feedbackFromState.email;
  formData.message = feedbackFromState.message;
}

function handlerSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    formData.email = '';
    formData.message = '';
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});
