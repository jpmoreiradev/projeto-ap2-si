class ProductsController {
  create(req, res) {
    res.json({message: 'registered product'})
  }

}

export default new ProductsController()