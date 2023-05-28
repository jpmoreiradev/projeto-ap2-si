import productsServicer from "../services/ProductsServicer.js"

class ProductsController {
  async create(req, res) {
    const {produtoId} = req.params;

    if(!produtoId) {
      return res.status(400).json({message: 'id undefined'})
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

  }

export default new ProductsController()