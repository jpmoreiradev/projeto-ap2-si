import client from '../models/ClientsModel.js'
import bCrypt from 'bcryptjs';


class ClientServices {
  async showProfile() {
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
      return undefined
    }
    
    const newClient = await client.create({
      clienteId,
      clienteUser,
      clienteName,
      clientePassword
    })
    
    return {newClient: {
      clienteId: newClient?.clienteId,
      clienteUser: newClient?.clientUser,
      clienteName: newClient?.clienteName,
    }}
  }
  
  async show(clienteId) {
    const myClient = await client.findOne({
      where: { clienteId }
    })
    return {
      clienteId: myClient?.clienteId,
      clienteUser: myClient?.clienteUser,
      clienteName: myClient?.clienteName,

    }
  }
  
  async update(clienteId, clienteUser, clienteName, clienteOldPassword, clienteNewPassword ) {
    const clientUser = await client.findOne({
      where: { clienteUser }, 
    })
    
    const clientUserId = await client.findOne({
      where: { clienteId }, 
    })

    const compare = clientUser?.clienteId !== clientUserId?.clienteId


    if(clientUser && compare) {
      return 4
    }

  const checkPassword = await clientUserId.checkPassword(clienteOldPassword)
  
  if(!checkPassword) {
    return 2
  }

  await client.update({clienteUser, clienteName, clientePassword: await bCrypt.hash(clienteNewPassword, 8)}, {
    where: { clienteId }
    });



  return {message: "client updated"}
  }

 async delete(clienteId) {
  const deleteClient = await client.destroy({
    where: { clienteId }
  });
  return deleteClient ? {message: "client deleted"} : {message: "cliente not found"}
 }
}
export default new ClientServices();