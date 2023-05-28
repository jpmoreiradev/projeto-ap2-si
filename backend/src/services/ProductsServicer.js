import Categorias from '../models/Categorias.js';
import Produtos from '../models/ProductModel.js';
import productsApi from './mercadoLivreApi/ProductsApi.js';

class ProductsServicer {
  async create(produtoId) {
    const productItem = await productsApi.productItem(produtoId)

    if(!productItem) {
      return 2
    }


    const category = await Categorias.findOne({
      where: { categoriaId: productItem.category_id }
    })

    if(!category) {
      const categoriaItem = await productsApi.categoryItem(productItem.category_id)

      await Categorias.create({
        categoriaId: categoriaItem.id,
        categoriaName: categoriaItem.name
      })
    } 

    const product = await Produtos.findOne({
      where: { produtoId }
    })


    if(product) {
      return 1
    }



    const newProduct = await Produtos.create({
      produtoId: productItem.id,
      categoriaId: productItem.category_id,
      produtoName: productItem.title,
      produtoPrice: productItem.price
    })

    return newProduct;

  }

}

export default new ProductsServicer();