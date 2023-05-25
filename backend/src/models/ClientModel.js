import Sequelize, { Model } from 'sequelize';
import bCrypt from 'bcryptjs';

class Clientes extends Model {
  static init(sequelize) {
    super.init(
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
      { sequelize }
    );

    this.addHook('beforeCreate', async client => {
      if (client.clientePassword) {
        client.clientePassword = await bCrypt.hash(client.clientePassword, 8);
      }
    });

    return this;
  }

  async checkPassword(password) {
    return bCrypt.compare(password, this.clientePassword);
  }
}

export default Clientes;