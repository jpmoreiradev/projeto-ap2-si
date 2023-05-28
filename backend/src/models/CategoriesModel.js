import Sequelize, { Model } from 'sequelize';

class Categorias extends Model {
  static init(sequelize) {
    super.init(
      {
        categoriaId: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        categoriaName: Sequelize.STRING
      },
      { sequelize }
    );
    return this;
  }

}

export default Categorias;