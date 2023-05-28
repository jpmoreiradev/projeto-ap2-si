import Sequelize, { Model } from 'sequelize';

class Produtos extends Model {
  static init(sequelize) {
    super.init(
      {
        produtoId: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        categoriaId: {
          type: Sequelize.STRING,
          unique: true,
        },
        produtoName: Sequelize.STRING,
        produtoPrice: Sequelize.NUMBER,
      },
      { sequelize }
    );
    return this;
  }

}

export default Produtos ;