const persistenciaProductoMongo=require('../../../modulos/productos/persistencia/productoMongoDAO')
module.exports = {


  friendlyName: 'List all',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    persistenciaProductoMongo.getInstance().listar()
    // All done.
    return;

  }


};
