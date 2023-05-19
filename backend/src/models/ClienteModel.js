import Sequelize, { Model } from 'sequelize';
import bCrypt from 'bcryptjs';

class Cliente extends Model {
  static init(sequelize) {
    this.init(
      {
        clienteId: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        clienteUser: {
          type: Sequelize.STRING,
          unique: true,
        },
        clienteName: Sequelize.STRING,
        clientePassword: Sequelize.STRING,
      },
      { sequelize, clientes}
    );
    
    return this;
  }

  async checkPassword(password) {
    return bCrypt.compare(`${password}`, `${this.password}`);
  }
}

export default Cliente;