const createClient = async (clienteUser, clienteName, clientePassword) => {
  const headers = {
    'Content-Type': 'application/json',
  }
  const init = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      clienteUser, clienteName, clientePassword
    })
  }

  const response = await fetch('http://localhost:3000/cliente/profile', init)
  const data = await response.json();
  return data;
}

if (typeof module !== 'undefined') {
  module.exports = {
    createClient,
  };
}