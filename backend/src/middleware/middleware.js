import jwt from 'jsonwebtoken'
import security from '../config/auth.js'

const verifyJWT =(req, res, next) => {
  const token = req.headers['authorization']

  jwt.verify(token, security.secret, (err, decoded) => {
  if(err) {
    return res.status(401).json({message: "unauthorized"})
  }
  req.clienteId = decoded.clienteId
  next();
  })
 
}

export default verifyJWT