  const {
      Router
  } = require('express');

  const router = Router();

  const categoryController = require('./controllers/categoryController');
  const productController = require('./controllers/productController');

  // Route pour les catégories
  router.get('/categories', categoryController.getAllCategories);

  // Route pour les produits
  router.get('/products', productController.getAllProducts);
  router.get('/product/:id', productController.getOneProduct);

  // ici, une 404 pour l'API
  router.use((req, res) => {
      res.status(404).json('No such endpoint');
  });

  module.exports = router;