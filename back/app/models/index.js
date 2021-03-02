const Account = require('./account');
const Allergen = require('./allergen');
const Category = require('./category');
const Order = require('./order');
const Product = require('./product');
const Review = require('./review');
const Stock = require('./stock');

Product.belongsToMany(Category, {
    as: "categories",
    through: "category_product",
    foreignKey: "product_id",
    otherKey: "category_id"
})