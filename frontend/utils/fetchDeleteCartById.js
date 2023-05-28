const fetchDeleteCartById = async (produtoId, token) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }
  const init = {
    method: 'DELETE',
    headers
  }
  
  const response = await fetch(`http://localhost:3000/produtos/delete/carrinho/${produtoId}`, init)
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = fetchDeleteCartById;
}
