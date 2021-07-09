const { Router } = require('express');
const CollectionController = require('./controllers/collection.js');
const BrandController = require('./controllers/brand.js');

const routes = Router();

routes.get('/collection', CollectionController.index);
routes.get('/collection/:id', CollectionController.show);
routes.post('/collection', CollectionController.create);
routes.put('/collection/:id', CollectionController.update);
routes.delete('/collection/:id', CollectionController.delete);

routes.get('/brand', BrandController.index);
routes.get('/brand/:id', BrandController.show);
routes.post('/brand', BrandController.create);
routes.put('/brand/:id', BrandController.update);
routes.delete('/brand/:id', BrandController.delete);

module.exports = routes;