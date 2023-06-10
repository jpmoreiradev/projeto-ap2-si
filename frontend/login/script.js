
const loginClient = async (clienteUser, clientePassword) => {
  const headers = {
    'Content-Type': 'application/json',
  }
  const init = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      clienteUser, clientePassword
    })
  }

  const response = await fetch('http://localhost:3000/cliente/login', init)
  const data = await response.json();
  localStorage.setItem("token", data.token);
  return data;
}

const loginEvent = async () => {

  document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const clienteUser = document.getElementById('username').value;
    const clientePassword = document.getElementById('password').value;
    const login = await loginClient(clienteUser, clientePassword);
  
    if (login.auth) {
      alert('Login Bem-Sucedido! Bem-vindo a Unistore');
      window.location.href = "../index.html"; 
      } else if (login.error === 'Usuário inexistente') {
        const boolean = confirm(`conta ${clienteUser} não existe, deseja criar uma conta?`);
        if(boolean) {
          window.location.href = "../register/index.html"; 
        }
      } else {
        alert('senha incorreta. Tente novamente.');
      }
  });
}

loginEvent()

if (typeof module !== 'undefined') {
  module.exports = loginClient;
}



