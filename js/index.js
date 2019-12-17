document
  .querySelector('button[type="submit"')
  .addEventListener('click', handleForm);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('focusout', handleOutFocusInput);
});

function handleForm(event) {
  event.preventDefault();
  inputs.forEach(validateInput);
}

function handleOutFocusInput(event) {
  const input = event.target;
  const label = input.nextSibling.nextSibling;
  if (validateInput(input)) {
    input.classList.remove('invalid');
    label.style.display = 'none';
  }
}

function validateInput(input) {
  const label = input.nextSibling.nextSibling;
  if (input.value === '') {
    input.classList.add('invalid');
    label.style.display = 'inline-block';
    return false;
  }
  if (input.type === 'email') {
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(input.value)) {
      input.classList.add('invalid');
      return false;
    }
  }
  return true;
}
