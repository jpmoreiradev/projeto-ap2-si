const fetchItem = async (id) => {
  if (!id) return new Error('You must provide an url');
  const URL = `http://localhost:3000/produtos/${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.product;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
