const fetchGetProfileClient = async (token) => {
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }
  
  
  const init = {
    method: 'GET',
    headers
  }
  
  const response = await fetch('http://localhost:3000/cliente/profile', init)
  const data = await response.json();
  return data;
}
if (typeof module !== 'undefined') {
  module.exports = {
    fetchGetProfileClient,
  };
}