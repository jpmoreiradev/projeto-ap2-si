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

const createClient = async (clienteName, clienteUser, clientePassword) => {
    const headers = {
        'Content-Type': 'application/json',
      }
      const init = {
        method: 'POST',
        headers,
        body: JSON.stringify({
          clienteName, clienteUser, clientePassword
        })
      }
    const response = await fetch ('http://localhost:3000/cliente/profile', init)
    const data = await response.json()
    return data
}

const registerEvent = async () => {

    document.getElementById('register-form').addEventListener('submit', async (event) => {
      event.preventDefault();
      const clienteName = document.getElementById('name').value;
      const clienteUser = document.getElementById('username').value;
      const clientePassword = document.getElementById('password').value;
      const register = await createClient(clienteName, clienteUser, clientePassword);
      if (register.newClient) {
        await loginClient(clienteUser, clientePassword)
        console.log(register.newClient)
        alert('Cadastro Bem-Sucedido! Bem-vindo a Unistore');
        window.location.href = "../index.html"; 
        } else {
        alert(`${register.message}`);
      }
    });
  }
    
  registerEvent()