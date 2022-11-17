" use strict "
let userName = document.querySelector('#userName');
let userPassword = document.querySelector("#userPassword");
let formSubmit = document.querySelector("#submit");
let Text1 = document.querySelector(".Text") ;
let userPassrordText = document.querySelector("#userPassrordText");




userName.addEventListener('focus', (e) => {
    e.target.style.border = "5px solid green"
    userName.style.color = 'green'
})

userPassword.addEventListener('focus', (e) => {
    e.target.style.border = "5px solid green"
    userPassword.style.color = " green "
})

function activv() {
    formSubmit.style.cssText = ` background-color: red; transition:all 1.5s`
}

formSubmit.onclick = activv