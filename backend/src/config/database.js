const config = {
  mysql: {
    dialect: 'mysql',
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false,
    pool: {
      max: 20,
      min: 1,
      idle: 10000,
    },
    define: {
      timestamps: false,
      underscored: true,
      underscoredAll: true,
    },
  }
};

export default config