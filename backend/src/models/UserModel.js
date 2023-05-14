import Sequelize, { Model } from 'sequelize';
import bCrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        fullname: Sequelize.STRING(50),
        gender: Sequelize.ENUM('M', 'F'),
        password: Sequelize.STRING,
        email: Sequelize.STRING,
        token: Sequelize.STRING,
        tokenExpiry: Sequelize.DATE,
        username: {
          type: Sequelize.STRING,
          unique: true,
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
      },
      { sequelize }
    );
    this.addHook('beforeCreate', async user => {
      if (user.password) {
        user.password = await bCrypt.hash(user.password, 8);
      }
    });
    return this;
  }

  async checkPassword(password) {
    return bCrypt.compare(`${password}`, `${this.password}`);
  }
}

export default User;