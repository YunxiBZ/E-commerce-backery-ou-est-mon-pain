const Account = require('./account');
const Allergen = require('./allergen');
const Category = require('./category');
const Order = require('./order');
const Product = require('./product');
const Review = require('./review');
const Stock = require('./stock');

// Relation NN Produit/Category
Product.belongsToMany(Category, {
    as: "categories",
    through: "product_category",
    foreignKey: "product_id",
    otherKey: "category_id"
});

Category.belongsToMany(Product, {
    as: "products",
    through: "product_category",
    foreignKey: "category_id",
    otherKey: "product_id"
});

//Relation 1N Produit/Stock
Product.hasMany(Stock, {
    foreignKey: "product_id",
    as: "stocks"
});

Stock.belongsTo(Product, {
    foreignKey: "product_id",
    as: "product"
});

//Relation NN Produit/Commande
Product.belongsToMany(Order, {
    as: "orders",
    through: "product_order",
    foreignKey: "product_id",
    otherKey: "order_id"
});

Order.belongsToMany(Product, {
    as: "products",
    through: "product_order",
    foreignKey: "order_id",
    otherKey: "product_id"
});

//Relation 1N Produit/Avis
Product.hasMany(Review, {
    foreignKey: "product_id",
    as: "reviews"
});

Review.belongsTo(Product, {
    foreignKey: "product_id",
    as: "product"
});

//Relation NN Produit/Allegène
Product.belongsToMany(Allergen, {
    as: "allergens",
    through: "product_allergen",
    foreignKey: "product_id",
    otherKey: "allergen_id"
});

Allergen.belongsToMany(Product, {
    as: "products",
    through: "product_allergen",
    foreignKey: "allergen_id",
    otherKey: "product_id"
});

//Relation 1N Compte/Commande
Account.hasMany(Order, {
    foreignKey: "account_id",
    as: "orders"
});

Account.belongsTo(Product, {
    foreignKey: "account_id",
    as: "account"
});

// Relation 1N Compte/Avis
Account.hasMany(Review, {
    foreignKey: "account_id",
    as: "reviews"
});

Review.belongsTo(Product, {
    foreignKey: "account_id",
    as: "account"
});

// Relation NN Compte/Allergène
Account.belongsToMany(Allergen, {
    as: "allergens",
    through: "account_allergen",
    foreignKey: "account_id",
    otherKey: "allergen_id"
});

Allergen.belongsToMany(Account, {
    as: "products",
    through: "account_allergen",
    foreignKey: "allergen_id",
    otherKey: "account_id"
});