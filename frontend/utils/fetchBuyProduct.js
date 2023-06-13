const fetchBuyProduct = async (productId, token) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token
    }
    const init = {
      method: 'POST',
      headers
    }
    
    const response = await fetch(`http://localhost:3000/produtos/pedidos/${productId}`, init)
    const data = await response.json();
    return data;
  };
  
  if (typeof module !== 'undefined') {
    module.exports = fetchBuyProduct;
  }
  