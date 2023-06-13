const fetchMyItemsAll = async (token) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token
    }
    const init = {
      method: 'GET',
      headers
    }
    
    const response = await fetch(`http://localhost:3000/produtos/pedidos/all`, init)
    const data = await response.json();
    return data;
  };
  
  if (typeof module !== 'undefined') {
    module.exports = fetchMyItemsAll;
  }
  