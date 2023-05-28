const fetchDeleteCartAll = async (token) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }
  const init = {
    method: 'DELETE',
    headers
  }
  
  const response = await fetch(`http://localhost:3000/produtos/delete/carrinho/all`, init)
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = fetchDeleteCartAll;
}
