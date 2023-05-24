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
    console.log(data)
    return data
}

const registerEvent = async () => {

    document.getElementById('register-form').addEventListener('submit', async (event) => {
      event.preventDefault();
      const clienteName = document.getElementById('name').value;
      const clienteUser = document.getElementById('username').value;
      const clientePassword = document.getElementById('password').value;
      console.log(clienteUser, clientePassword)
      const register = await createClient(clienteName, clienteUser, clientePassword);
    
    
      if (register.newClient) {
        alert('Cadastro Bem-Sucedido! Bem-vindo a UNIstore');
        window.location.href = "../index.html"; 
        } else {
        alert(`${register.message}`);
      }
    });
  }
    
  registerEvent()