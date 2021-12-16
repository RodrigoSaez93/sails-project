const persistenciaProductoMongo=require('../../../modulos/productos/persistencia/productoMongoDAO')
module.exports = {


  friendlyName: 'Update',


  description: 'Update products.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    await persistenciaProductoMongo.getInstance().actualizar(inputs)
    return

  }


};
