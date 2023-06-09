import Categorias from '../models/CategoriesModel.js';
import Produtos from '../models/ProductsModel.js';
import Carrinho from '../models/CartModel.js'
import productsApi from './mercadoLivreApi/ProductsApi.js';
import { Op } from 'sequelize';
import Pedidos from '../models/MyRequestsModel.js';
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
      produtoPrice: productItem.price,
      produtoImage: productItem.thumbnail,

    })

    return newProduct;

  }
 
  async getProductById(produtoId) {
    const product = await Produtos.findOne({
      where: { produtoId }
    })
    if(!product) {
        return undefined
    }
    return product
  }

  async addCart(produtoId, clienteId) {
    const product = await Produtos.findOne({
      where: { produtoId }
    })
    if(!product) {
        return 1
    }

    await Carrinho.create({
      produtoId: product.produtoId,
      clienteId
    })
    return product; 
  }

  async deleteCartAll(clienteId) {
    const myProducts = await Carrinho.findOne({
      where: { clienteId }
    })
    if(!myProducts) {
        return undefined
    }  

    const allDeleted = await Carrinho.destroy({
      where: { clienteId }
    });

    return allDeleted;
  }

  async deleteCartById(clienteId, produtoId) {
    const myProduct = await Carrinho.findOne({
      where: {
        [Op.and]: [
          {clienteId},
          {produtoId}
        ]
      }
    })
    if(!myProduct) {
        return undefined
    }  

    const deletedById = await Carrinho.destroy({
      where: { carrinhoId: myProduct.carrinhoId }
    });

    return deletedById;
  }

  async getAllProductCart(clienteId) {
      const myProducts = await Carrinho.findAll({
        where: { clienteId }
      })
      if(!myProducts) {
          return undefined
      }  

      return myProducts;
  }

  async addBuyItem(produtoId, clienteId) {
    const product = await Produtos.findOne({
      where: { produtoId }
    })
    if(!product) {
        return 1
    }

    await Pedidos.create({
      produtoId: product.produtoId,
      clienteId,
      pedidoDate: new Date().toString()

    })
    return product; 
  }
}


export default new ProductsServicer();