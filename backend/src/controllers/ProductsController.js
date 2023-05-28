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
        return res.status(400).json({message: 'product not found'})
        }
      return res.json({newProduct})    
      
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

  }

export default new ProductsController()