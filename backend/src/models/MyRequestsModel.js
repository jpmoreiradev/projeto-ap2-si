import Sequelize, { Model } from 'sequelize';

class Pedidos extends Model {
  static init(sequelize) {
    super.init(
      {
        pedidoId: {
          type: Sequelize.NUMBER,
          primaryKey: true,
          field: 'pedido_id',
        },
        produtoId: {
         type: Sequelize.STRING,
         field: 'produto_id',
        },
        clienteId: {
          type: Sequelize.NUMBER,
          field: 'cliente_id'
        },
        pedidoDate: {
          type: Sequelize.DATE
        }
      },
      { sequelize, tableName: 'pedidos' }
    );
    return this;
  }

}

export default Pedidos;