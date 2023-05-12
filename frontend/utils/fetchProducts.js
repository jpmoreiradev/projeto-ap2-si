const fetchProducts = async (product) => {
    if (!product) return new Error('You must provide an url');
    const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}