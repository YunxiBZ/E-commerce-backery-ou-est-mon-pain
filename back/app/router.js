  const {
      Router
  } = require('express');

  const router = Router();

  const categoryController = require('./controllers/categoryController');
  const productController = require('./controllers/productController');
  const accountContoller = require('./controllers/accountController');
  const allergenController = require('./controllers/allergenController');
  const formController = require('./controllers/formController');

  const adminMW = require('./middlewares/adminMW');
  const userMW = require('./middlewares/userMW');

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

  // Route pour les allergènes
  router.post('/allergen', adminMW, allergenController.createAllergen);
  router.put('/allergen', adminMW, allergenController.modifyAllergen);
  router.delete('/allergen', adminMW, allergenController.deleteAllergen);

  // Route pour les comptes 
  router.post('/signup', accountContoller.handleSignupForm);
  router.post('/login', accountContoller.handleLoginForm);
  router.get('/account', accountContoller.accountPage);
  router.put('/account', userMW, accountContoller.modifyAccount);
  router.put('/password-account', userMW, accountContoller.modifyPassword);
  router.delete('/account', userMW, accountContoller.deleteAccount);

  // ici, une 404 pour l'API
  router.use((req, res) => {
      res.status(404).json('No such endpoint');
  });

  module.exports = router;