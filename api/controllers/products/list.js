const persistenciaProductoMongo=require('../../../modulos/productos/persistencia/productoMongoDAO')
module.exports = {


  friendlyName: 'List',


  description: 'List products.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    persistenciaProductoMongo.getInstance().buscar(inputs)
    // All done.
    return;

  }


};
