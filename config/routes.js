


module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'GET /api/products': { action: 'products/listAll' },
  'POST /api/products': { action: 'products/insert' },
  'GET /api/products/:id': { action: 'products/list' },
  'PUT /api/products': { action: 'products/update' },
  'DELETE /api/products': { action: 'products/delete' },
  'GET /api/chat': { action: 'chat/listAll' },
  'POST /api/chat': { action: 'chat/insert' }

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
