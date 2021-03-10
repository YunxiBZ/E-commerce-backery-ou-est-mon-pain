  const {
      Router
  } = require('express');

  const router = Router();

  const categoryController = require('./controllers/categoryController');
  const productController = require('./controllers/productController');
  const accountController = require('./controllers/accountController');
  const allergenController = require('./controllers/allergenController');
  const orderController = require('./controllers/orderController');
  const reviewController = require('./controllers/reviewController');

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
  router.post('/signup', accountController.handleSignupForm);
  router.post('/login', accountController.handleLoginForm);
  router.get('/account', userMW, accountController.accountPage);
  router.put('/account', userMW, accountController.modifyAccount);
  router.put('/password-account', userMW, accountController.modifyPassword);
  router.delete('/account', userMW, accountController.deleteAccount);

  // Route pour les commandes
  router.post('/order', userMW, orderController.postOrder);
  router.get('/client-orders', userMW, orderController.OrdersById);
  router.get('/dayli-orders', adminMW, orderController.OrdersByDay);

  // Route pour les avis
  router.post('/product-score', userMW, reviewController.postReview)

  // ici, une 404 pour l'API
  router.use((req, res) => {
      res.status(404).json('No such endpoint');
  });

  module.exports = router;