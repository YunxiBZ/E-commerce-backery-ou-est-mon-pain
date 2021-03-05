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
  router.post('/category', adminMW, categoryController.createCategory);
  router.put('/category', adminMW, categoryController.modifyCategory);
  router.delete('/category', adminMW, categoryController.deleteCategory);

  // Route pour les produits
  router.get('/products', productController.getAllProducts);
  router.get('/product/:id', productController.getOneProduct);
  router.post('/product', adminMW, productController.createProduct);
  router.put('/product', adminMW, productController.modifyProduct);
  router.delete('/product', adminMW, productController.deleteProduct);

  // Route pour les comptes 
  router.post('/signup', accountContoller.handleSignupForm);
  router.post('/login', accountContoller.handleLoginForm);

  // ici, une 404 pour l'API
  router.use((req, res) => {
      res.status(404).json('No such endpoint');
  });

  module.exports = router;