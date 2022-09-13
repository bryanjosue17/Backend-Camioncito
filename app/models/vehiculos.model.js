module.exports = (sequelize, Sequelize) => {
  const vehiculos = sequelize.define("vehiculos", {
    placa: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    marca: {
      type: Sequelize.STRING,
    },
    modelo: {
      type: Sequelize.STRING,
    },
    serie: {
      type: Sequelize.STRING,
    },
    color: {
      type: Sequelize.STRING,
    },
    latitude: {
      type: Sequelize.STRING,
    },
    longitude: {
      type: Sequelize.STRING,
    },
    datetime: {
      type: Sequelize.STRING,
    },
  });

  return vehiculos;
};
