const firstnameEL = document.querySelector('#firstname');
const lastnameEl = document.querySelector('#lastname');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
// const confirmpasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');

const checkFirstName = () => {

    let valid = false;

    const min = 2,
        max =  30;

        const firstname = firstnameEL.value.trim();

        if(!isRequired(firstname)) {
            showError(firstnameEL, 'First Name cannot be empty.');
        } else if (!isBetween(firstname.length, min, max)) {
            showError(firstnameEL, 'First Name must be between 2 and 30 characters.')
        } else {
            showSuccess(firstnameEL);

            valid = true;
        }
        return valid;
};

const checkLastName = () => {
       
    let valid =  false;

    const min = 2,
        max = 30;

    const lastname = lastnameEl.value.trim();
    
    if(!isRequired(lastname)) {
        showError(lastnameEl, 'Last Name cannot be empty.');
    } else if (!isBetween(lastname.length, min, max)) {
        showError(lastnameEl, 'Last Name must be between 2 and 30 characters.')
    } else {
        showSuccess(lastnameEl);

        valid = true;
    }
    return valid;

};

const checkEmail = () => {

    let valid = false;

    const email = emailEl.value.trim();

    if(!isRequired(email)) {
        showError(emailEl, 'Email cannot be empty.');
    } else if (!isEmailValid(email)) {
        showError(emailEl,'Email is not valid')
    } else {
        showSuccess(emailEl);

        valid = true;
    }
    return valid;

};

const checkPassword = () => {

    let valid =  false;

    const password = passwordEl.value.trim();

    if(!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl,'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);

        valid = true;
    }
    return valid;

};

// const checkConfirmPassword =() => {
//     let valid = false;

//     const confirmpassword = confirmpasswordEl.value.trim();
//     const password = passwordEl.value.trim();

//     if(!isRequired(confirmpassword)) {
//         showError(confirmpasswordEl, 'Please enter the password again.');
//     } else if (password !== confirmPassword) {
//         showError(confirmpasswordEl, 'The Password does not match.')
//     } else {
//         showSuccess(confirmpasswordEl);

//         valid = true;
//     }
//     return valid;

// }



const isEmailValid = (email) => {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {

    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {

    const formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent =  message;
};

const showSuccess = (input) => {
    
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}

form.addEventListener('submit', function(e) {

    e.preventDefault();

    let isFirstNameValid = checkFirstName(),
        isLastNameValid = checkLastName(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword();
        // isConfirmPasswordValid = checkConfirmPassword();

    let  isFormValid = isFirstNameValid && 
         isLastNameValid&&
         isEmailValid&&
         isPasswordValid;
        //  isConfirmPasswordValid;

    if (isFormValid) {

    }    

});

const debounce = (fn, delay = 500) => {

    let timeoutId;
    return (...args) => {

        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout( () => {
            fn.apply(null, args)
        }, delay);

    };
};

form.addEventListener('input', debounce(function (e) {

    switch (e.target.id) {
        case 'firstname':
            checkFirstName();
            break;
        case 'lastname':
            checkLastName();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        // case 'confirm-password':
        //     checkConfirmPassword();
        //     break;             

    }

}));

var mybutton = document.getElementById("topbtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



