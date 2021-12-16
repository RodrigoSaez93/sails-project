const persistenciaProductoMongo=require('../../../modulos/productos/persistencia/productoMongoDAO')
module.exports = {


  friendlyName: 'Insert',


  description: 'Insert products.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    persistenciaProductoMongo.getInstance().insertar(inputs)
    return;

  }


};
