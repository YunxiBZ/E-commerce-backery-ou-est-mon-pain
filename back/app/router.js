  const {
      Router
  } = require('express');

  const router = Router();

  const categoryController = require('./controllers/categoryController');
  const productController = require('./controllers/productController');
  const accountContoller = require('./controllers/accountController');

  const adminMW = require('./middlewares/adminMW');

  // Route pour les catégories
  router.get('/categories', categoryController.getAllCategories);
  router.post('/category', categoryController.createCategory);
  router.put('/category', categoryController.modifyCategory);
  router.delete('/category', categoryController.deleteCategory);

  // Route pour les produits
  router.get('/products', productController.getAllProducts);
  router.get('/product/:id', productController.getOneProduct);
  router.post('/product', productController.createProduct);

  // Route pour les comptes 
  router.post('/signup', accountContoller.handleSignupForm);
  router.post('/login', accountContoller.handleLoginForm);

  // ici, une 404 pour l'API
  router.use((req, res) => {
      res.status(404).json('No such endpoint');
  });

  module.exports = router;