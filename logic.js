// const text = document.querySelector('#text');
// const textError = document.querySelector('.text-error');
// text.addEventListener('input', function () {
//     let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
//     if (nameRegex.test(text.value))
//         textError.textContent = "";
//     else textError.textContent = "Name is Incorrect";
// });



// const text = document.querySelector('#text');
// const textError = document.querySelector('.text-error');

// text.addEventListener('blur', function () {
//     let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
//     if (nameRegex.test(text.value)) {
//         textError.textContent = "";
//     } else {
//         textError.textContent = "Name is Incorrect";
//     }
// });

const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function() {
  let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
  if (nameRegex.test(text.value)) {
    textError.textContent = "";
  } else {
    textError.textContent = "Name is incorrect";
  }
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
    let emailRegex = RegExp('^[0-9a-zA-Z]+([+.-]([a-z0-9A-Z]+))*[@][a-zA-Z0-9]+[.][a-z]{2,4}[,]?([.][a-z]{2,4})?$');
    if(emailRegex.test(email.value))
    emailError.textContent="";
    else emailError.textContent="Not a valid Email"
})