const saveCartItems = async (produtoId, token) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }
  const init = {
    method: 'POST',
    headers
  }
  
  const response = await fetch(`http://localhost:3000/produtos/carrinho/${produtoId}`, init)
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
