import client from '../models/ClientModel.js'

class ClientServices {
  async show() {
    const clients = await client.findAll()

    return clients.map(item => ({
      clienteId: item.clienteId,
      clienteUser: item.clienteUser,
		  clienteName: item.clienteName,
    }))
  }

  async create(clienteId, clienteUser, clienteName, clientePassword) {
     const clientUser = await client.findOne({
      where: { clienteUser }, 
    })

    if(clientUser) {
      return {message: "client already exists"}
    }

    const newClient = await client.create({
      clienteId,
      clienteUser,
      clienteName,
      clientePassword
    })

    return newClient
  }
}
export default new ClientServices();