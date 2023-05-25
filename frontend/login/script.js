
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
    console.log(clienteUser, clientePassword)
    const login = await loginClient(clienteUser, clientePassword);
  
  
    if (login.auth) {
      alert('Login Bem-Sucedido! Bem-vindo a UNIstore');
      window.location.href = "../index.html"; 
      } else {
      alert('Nome de usuário ou senha incorretos. Tente novamente.');
    }
  });
}
  
loginEvent()


