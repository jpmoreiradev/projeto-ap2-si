const fetchSaveProduct = async (productId) => {
  const headers = {
    'Content-Type': 'application/json',
  }
  const init = {
    method: 'POST',
    headers,
  }

  const response = await fetch(`http://localhost:3000/produtos/${productId}`, init)
  const data = await response.json();
  return data;
}
if (typeof module !== 'undefined') {
module.exports = {
  fetchSaveProduct,
};
}