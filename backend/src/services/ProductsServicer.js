import Produtos from '../models/ProductModel.js';
import productsApi from './mercadoLivreApi/ProductsApi.js';

class ProductsServicer {
  async create(produtoId) {

    const product = await Produtos.findOne({
      where: { produtoId }
    })


    if(product) {
      return 1
    }
    const productItem = await productsApi.productItem(produtoId)

    if(!productItem) {
      return 2
    }

    console.log({
      produtoId: productItem.id,
      categoriaId: productItem.category_id,
      produtoName: productItem.title,
      produtoPrice: productItem.price
      
    })

    const newProduct = Produtos.create({
      produtoId: productItem.id,
      categoriaId: productItem.category_id,
      produtoName: productItem.title,
      produtoPrice: productItem.price
    })

    return newProduct;

  }

}

export default new ProductsServicer();