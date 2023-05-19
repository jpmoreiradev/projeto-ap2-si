import client from '../models/ClientModel.js'

class ClientServices {
  async show(clienteId) {
     const clients = await client.findOne({
      where: { clienteId }, 
    })
    return {
        clienteId: clients?.clienteId,
        clienteUser: clients?.clienteUser,
        clienteName: clients?.clienteName,
      }
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