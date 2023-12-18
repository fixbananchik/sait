const form = document.querySelector("form"),
       emailField = form.querySelector(".email-field"),
       emailInput = emailField.querySelector(".email"),
       passField = form.querySelector(".create-password"),
       passInput = passField.querySelector(".password"),
       cPassField = form.querySelector(".confirm-password"),
       cPassInput = cPassField.querySelector(".cPassword");

// Email Validtion
function checkEmail(){
    const emaiPattern = /^[^ ]+\.[a-z]{2,3}$/
    if(!emailInput.value.match(emaiPattern)){
        return emailField.classList.add("invalid") //ading invalid class value do not matched email pattern
    }
    emailField.classList.remove("invalid"); //removing invalid class if value with emaiPattern
} 

//Password Validation
function createPass(){
    const passPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if(!passInput.value.match(passPattern)){
        return passField.classList.add("invalid");

      }
       passField.classList.remove("invalid")
}

//Confirm Password Validition
function confirmPass(){
    if(passInput.value !== cPassInput.value || cPassInput.value === ""){
        return cPassField.classList.add("invalid");
    }
    cPassField.classList.remove("invalid")
}

//Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) =>{
 e.preventDefault(); //preventing form submitting
 checkEmail();
 createPass();
 confirmPass();

 //caliing function on key up
 emailInput.addEventListener("keyup", checkEmail)
 passInput.addEventListener("keyup", createPass)
 cPassInput.addEventListener("keyup", confirmPass)

 if(
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")

 ) {
    location.href = form.getAttribute("action");
 }
});