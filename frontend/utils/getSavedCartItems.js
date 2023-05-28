const getSavedCartItems = async (token) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }
  const init = {
    method: 'GET',
    headers
  }
  
  const response = await fetch(`http://localhost:3000/produtos/carrinho/all`, init)
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
