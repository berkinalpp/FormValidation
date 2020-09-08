const form=document.getElementById('form');
const username=document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const rePass = document.getElementById('rePass');
const phone = document.getElementById('phone');

function invalid(input,message){
    input.className = 'form-control is-invalid';
    const div=input.nextElementSibling;
    div.innerText=message;
    div.className='invalid-feedback';
}

function valid(input) {
    input.className='form-control is-valid';
}

function checkMail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(input.value).toLowerCase())) {
       valid(input);
   } else{
       invalid(input,'E-mail is a not valid !');
   }
}



function checkPass(pass,rePass){
    if (pass.value!==rePass.value) {
        
        invalid(rePass,'Passwords does not match !');
    }
}

function checkPhone(input){
    var express = /^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/;
    if (!express.test(input.value)) {
        invalid(input,'Phone is a not valid !')
    }
}


function checkRequired(inputs) {
    inputs.forEach(function (input) {
        if (input.value === '') {

            invalid(input, `${input.id} is required`);
        } else {
            valid(input);
        }
    });


}


function checkLength(input, min, max) {
    if (input.value.length <= min) {
        invalid(input, `${input.id} must be at least ${min} characters.`);
    } else if (input.value.length >= max) {
        invalid(input, `${input.id} no more than ${max} characters.`)
    } else {
        valid(input);
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,pass,rePass,phone]);
    checkMail(email);
    checkLength(username,3,10);
    checkLength(pass,7,15);
    checkPass(pass,rePass);
    checkPhone(phone);

});