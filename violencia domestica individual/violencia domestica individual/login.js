const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = document.querySelector('#email').value;
    const passwordInput = document.querySelector('#password').value;

    // Recuperar os dados salvos no localStorage
    const savedData = localStorage.getItem('formData');

    if (!savedData) {
        // Redirecionar para a página de cadastro se não houver dados
        alert('Nenhum usuário cadastrado. Redirecionando para a página de cadastro.');
        window.location.href = 'index.html';
        return;
    }

    const formData = JSON.parse(savedData);

    // Validar email e senha
    if (formData.email === emailInput && formData.password === passwordInput) {
        alert('Login bem-sucedido!');
        // Redirecionar para a página principal ou dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Email ou senha incorretos.');
    }
});