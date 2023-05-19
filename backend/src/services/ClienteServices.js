import cliente from '../models/ClienteModel.js'

class ClienteServices {
  async cliente() {

    
    
    const clientes = await cliente.findOne({
      where: { clienteId: 123 }, 
    })
    return clientes
  }
}
export default new ClienteServices();