const persistenciaChatMongo=require('../../../modulos/chats/persistencia/chatMongoDAO')
module.exports = {


  friendlyName: 'Insert',


  description: 'Insert chat.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
     await persistenciaChatMongo.getInstance().insertarMensaje(inputs)
    // All done.
    return;

  }


};
