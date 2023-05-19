import Sequelize from 'sequelize';
import config from '../config/database.js'; 
import cliente from '../models/ClienteModel.js'


const models = [
  cliente
]

class Database {
  constructor() {
    this.mysql();
  }

  mysql() {
    this.connection = new Sequelize(config.mysql);
    this.connection
      .authenticate()
      .then(() =>
        console.log(
          `Connection to MySQL has been established successfully. Host=${config.mysql.host}`
        )
      )
      .catch(err =>
        console.log('Unable to connect to the MySQL database:', err)
      );
    models
      .map(model => {
        try {
          return (
            (model.initialize && model.initialize(this.connection)) ||
            model.init(this.connection)
          );
        } catch (error) {
          return model;
        }
      })
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
