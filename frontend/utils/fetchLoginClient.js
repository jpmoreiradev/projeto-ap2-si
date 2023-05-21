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

console.log(typeof module)

if (typeof module !== 'undefined') {
  module.exports = {
    loginClient,
  };
}