import productsServicer from "../services/ProductsServicer.js"

class ProductsController {
  async create(req, res) {
    const {produtoId} = req.params;

    if(!produtoId) {
      return res.status(400).json({message: 'product id undefined'})
    }
      const newProduct = await productsServicer.create(produtoId)

      if(newProduct === 1) {
      return res.status(400).json({message: 'product already created'})
      }

      if(newProduct === 2) {
        return res.status(404).json({message: 'product not found'})
        }
      return res.json({newProduct})    
      
    }

  async getProduct(req, res) {
    const { produtoId } = req.params;


    const product = await productsServicer.getProductById(produtoId)

    if(!product) {
      return res.status(404).json({message: "product not found"})
    }

    return res.json({product});
  }

  async addProductCart(req, res) {
    const {produtoId} = req.params;
    const {clienteId} = req

    if(!produtoId) {
      return res.status(400).json({message: 'product id undefined'})
    }

    if(!clienteId) {
      return res.status(401).json({message: 'token invalid'})
    }

    const newCarrinho = await productsServicer.addCart(produtoId, clienteId)

    if(newCarrinho === 1) {
      return res.status(400).json({message: 'product not found'})
    }
    return res.json({ newCarrinho })
  }

  async deleteCartAll(req, res) {
      const {clienteId} = req
      const deleteCart = await productsServicer.deleteCartAll(clienteId)

      if(!deleteCart) {
      return res.status(400).json({message: 'not find'})
      }

      return res.status(202).json({deleteCart}) 
  }

  async deleteCartById(req, res) {
    const {clienteId} = req
    const {produtoId} = req.params

    const deleteCartById = await productsServicer.deleteCartById(clienteId, produtoId)

      if(!deleteCartById) {
      return res.status(404).json({message: 'not found'})
      }

      return res.status(202).json({deleteCartById}) 

  }

  async showCart(req, res) {
    const {clienteId} = req

    const allProductCart = await productsServicer.getAllProductCart(clienteId)

    if(!allProductCart) {
      return res.status(404).json({message: 'not found'})
    }

    return res.json(allProductCart)

  }

  }

export default new ProductsController()