const persistenciaProductoMongo=require('../../../modulos/productos/persistencia/productoMongoDAO')
module.exports = {


  friendlyName: 'Delete',


  description: 'Delete products.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    await persistenciaProductoMongo.getInstance().eliminar(inputs)
    // All done.
    return;

  }


};
