import Clientes from "../models/ClientModel.js"
import  security from '../config/auth.js'
import jwt from 'jsonwebtoken'


class SessionsController{
  async login(req, res) {
  const { clienteUser, clientePassword } = req.body

  const client = await Clientes.findOne({
    where: {clienteUser}
  })

  if(!client) {
    return res.status(401).json({ error: 'Usuário inexistente' });
  }

  if (!(await client.checkPassword(clientePassword))) {
    return res.status(401).json({ error: 'Senha incorreta' });
  }

  const token = jwt.sign({clienteId: client.clienteId}, security.secret, {expiresIn: security.expiresIn })

  return res.status(200).json({
    clienteId: client.clienteId,
    clienteUser: client.clienteUser,
    clienteName: client.clienteName,
    auth: token ? true : false,
    token,
  })

 }
}

export default new SessionsController()