import axios from 'axios'

class ProductsApi {
  async productItem(produtoId) { 
    const URL = `https://api.mercadolibre.com/items/${produtoId}`;
    const {data} = await axios.get(URL)
    return data;

  }

}

export default new ProductsApi();