const persistenciaChatMongo=require('../../../modulos/chats/persistencia/chatMongoDAO')
module.exports = {


  friendlyName: 'List all',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

   return await persistenciaChatMongo.getInstance().obtenerMensajes()
    
  }


};
