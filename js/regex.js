// NodeList
const inputs = document.querySelectorAll('.input-field');

// regex patterns
const patterns = {
  name: /^\s*([A-Za-z]{1,}([\.,] *|[-']| )?)+[A-Za-z]+\.?\s*$/,
  subject: /^(.{2,})?$/,
  email: /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,5}(\.[a-zA-Z]{2,5})?$/,
  message: /^.{10,}$/,
};

// validation function
function validate(field, regex) {
  if (regex.test(field.value)) {
    if (field.classList.contains('invalid')) {
      field.classList.remove('invalid');
    }
    field.classList.add('valid');
  } else {
    if (field.classList.contains('valid')) {
      field.classList.remove('valid');
    }
    field.classList.add('invalid');
  }
}

// attach keyup events to inputs
inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
    if (e.target.value === '') {
      e.target.classList.remove('valid');
    }
  });
});
