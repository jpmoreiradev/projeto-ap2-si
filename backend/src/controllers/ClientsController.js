import clientServices from '../services/ClientServices.js'

class ClientController {
  async show(req, res) {
    const {clienteId} = req.params;

    if(!clienteId) {
      return res.json({message: "clientId undefined"})
    }
    const client = await clientServices.show(clienteId)
    return res.json(client)
  }

  async create(req, res) {
    const { clienteId, clienteUser, clienteName, clientePassword } = req.body
    
    const newClient = await clientServices.create(clienteId, clienteUser, clienteName, clientePassword)
    return res.json(newClient)
  }

}

export default new ClientController()