(function() {
  let form = document.querySelector('form');
  let emailInput = document.querySelector('#email');
  let nameInput = document.querySelector('#name');
  let messageInput = document.querySelector('#message');
  
  function validateEmail() {
    let value = emailInput.value;
    if(!value){
      showErrorMessage(emailInput, 'Email is required');
      return false;
    }
    if(value.indexOf('@') === -1){
      showErrorMessage(emailInput, 'You must enter a valid email address');
      return false;
    }
    showErrorMessage(emailInput, null)
    return true;
  }
  
  function validateNameField() {
    let value = nameInput.value;

    if (!value) {
      showErrorMessage(nameInput, 'Please enter your name');
      return false;
    }

    showErrorMessage(nameInput, null);
    return true;
  }
  function validateMessageField() {
    let value = messageInput.value;

    if (!value) {
      showErrorMessage(messageInput, 'Please enter your message');
      return false;
    }

    showErrorMessage(messageInput, null);
    return true;
  }

  //VALIDATE THE OVERALL FORM
  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidName = validateNameField();
    let isValidMessage = validateMessageField();
    return isValidEmail && isValidName && isValidMessage;
  }
  function showErrorMessage(input, message){
    let container = input.parentElement; //select the form
    let emailField = document.querySelector('#email');
    let nameField = document.querySelector('#name');
    let messageField = document.querySelector('#message');

    let error = container.querySelector('.error-message'); //get any error message that already exists
    if(error){
      let emailError = document.querySelector('.email-error')
      let nameError = document.querySelector('.name-error')
      let messageError = document.querySelector('.message-error')
      if(emailError){
        emailError.remove() //if there is on remove it
      }
      if(nameError){
        nameError.remove() //if there is on remove it
      }
      if(messageError){
        messageError.remove() //if there is on remove it
      }
      
    }

    if(message){
      //do all for every error
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message; 
      
      //if the error has the word Email or email in it
      if(message.includes('Email') || message.includes('email')){
        error.classList.add('email-error');
        emailField.insertAdjacentElement('afterend', error);
      }
      //if the error has the word Name or name in it
      if(message.includes('Name') || message.includes('name')){
        error.classList.add('name-error');
        nameField.insertAdjacentElement('afterend', error);
      }
      
      //if the error has the word Name or name in it
      if(message.includes('Message') || message.includes('message')){
        error.classList.add('message-error');
        messageField.insertAdjacentElement('afterend', error);
      }
      
    }

  }
  emailInput.addEventListener('input', validateEmail);
  nameInput.addEventListener('input', validateNameField)
  messageInput.addEventListener('input', validateMessageField)
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Success!');
    }
    })
})();