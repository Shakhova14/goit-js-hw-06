const formEl = document.querySelector(".login-form");
const buttonEl = document.querySelector("button");
console.log(buttonEl);


formEl.addEventListener("submit", onFormElSubmit);



function onFormElSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements

  
    const mail = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        mail,
        password,
    };

    if (mail === "") {
       alert("Введите почту"); 
        
    } if (password === "") {
        alert("Введите пароль") ;
           } 
     else {
       console.log(formData); 
       formEl.reset();
    }
//  
    // buttonEl.addEventListener('click', () => formEl.reset());
}


