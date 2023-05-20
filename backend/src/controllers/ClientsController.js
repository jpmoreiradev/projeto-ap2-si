import clientServices from '../services/ClientServicer.js'

class ClientController {
  async showProfiles(req, res) {
    const client = await clientServices.showProfile()
    return res.json(client)
  }

  async create(req, res) {
    const { clienteId, clienteUser, clienteName, clientePassword } = req.body
    try {
      if(!clienteUser || !clienteName || !clientePassword) {
        res.status(401).json({message: 'params invalid'})
      }
      const newClient = await clientServices.create(clienteId, clienteUser, clienteName, clientePassword)
      
      
      
      if(!newClient) {
        res.status(400).json({message: 'client already exist'})
      }
      
      return res.json(newClient)
    } catch (error) { 
      console.log(error.message)     
    }
  }
  
  async show(req, res) {
    const client = await clientServices.show(req.clienteId)
    return res.json(client)
  }

  async update(req, res) {
    const { clienteUser, clienteName, clientePassword } = req.body
    
  if(!clienteUser || !clienteName || !clientePassword) {
    res.status(400).json({message: 'params invalid'})
  }

  const updateClient = await clientServices.update(req.clienteId, clienteUser, clienteName, clientePassword)

  if(!updateClient) {
    res.status(400).json({message: 'user not found'})
  }

  return res.json(updateClient)
 }

 async delete(req, res) {
 const deleteClient = await clientServices.delete(req.clienteId) 
 return res.json(deleteClient)
 }

}

export default new ClientController()