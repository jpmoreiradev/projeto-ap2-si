import Sequelize, { Model } from 'sequelize';

class Carrinho extends Model {
  static init(sequelize) {
    super.init(
      {
        carrinhoId: {
          type: Sequelize.NUMBER,
          primaryKey: true,
        },
        produtoId: {
         type: Sequelize.STRING,
         field: 'produto_id',
        },
        clienteId: {
          type: Sequelize.NUMBER,
          field: 'cliente_id'
        }
      },
      { sequelize, tableName: 'carrinho' }
    );
    return this;
  }

}

export default Carrinho;