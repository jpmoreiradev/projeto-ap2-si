import clientServices from '../services/ClientServices.js'

class ClientController {
  async show(req, res) {
    console.log(req.clienteId, "Fez esssa chamada <3")
    const client = await clientServices.show()
    return res.json(client)
  }

  async create(req, res) {
    const { clienteId, clienteUser, clienteName, clientePassword } = req.body
    
    const newClient = await clientServices.create(clienteId, clienteUser, clienteName, clientePassword)
    return res.json(newClient)
  }

}

export default new ClientController()