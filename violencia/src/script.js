const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageTextarea = document.querySelector('#message');   
const jobSelect = document.querySelector('#job');  
const passwordInput = document.querySelector('#password');

form.addEventListener("submit", (event) => {

    event.preventDefault();

    if (nameInput.value === "" ) { 
        alert("Por favor, preencha seu nome.");
        return;
    }
    if (emailInput.value === "" || !isEmailValid(emailInput.value )) { 
        alert("Por favor, preencha seu e-mail (utilize um e-mail válido)"); 
        return;
    }

    if (!validatePassword(passwordInput.value, 8)) {
        alert("Por favor, utilize uma senha com no mínimo 8 dígitos.");   
        return;

    }


    if (jobSelect.value === "" ) { 
        alert("Por favor, selecione sua ocupação.");
        return;
    }
    
    if (messageTextarea.value === "" ) { 
        alert("Por favor, digite uma breve descrição sobre sua ocupação");
         return;
    }
    
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        job: jobSelect.value,
        message: messageTextarea.value
    };

    console.log("Dados do formulário:", formData);

    localStorage.setItem("formData", JSON.stringify(formData)); 

     
    form.submit();  

}); 
 
function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    
    if(emailRegex.test(email)) {
        return true;
    }
    return false;

} 

function validatePassword(password, minDigits) {
  if (password.length >= minDigits) {
      
        return true;
    }
    
    return false; 
}

const savedData = localStorage.getItem("formData");
if (savedData) {
    const formData = JSON.parse(savedData);
    console.log("Dados recuperados:", formData);
}
        form.addEventListener("submit", (event) => {
        event.preventDefault();
    
        // ... validações e salvamento no localStorage ...
    
        alert('Cadastro realizado com sucesso! Redirecionando para a página de login.');
        window.location.href = 'login.html';
    }) ;
        

  



