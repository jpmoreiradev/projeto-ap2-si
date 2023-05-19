import clienteServices from '../services/ClienteServices.js'

class ClientesController {
  async create(req, res) {
    const clientes = await clienteServices.cliente()

    console.log(clientes)

    return res.json(clientes)
  }

}

export default new ClientesController()