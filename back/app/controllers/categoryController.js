const {
    Category
} = require('../models');

const categoryController = {

    getAllCategories: async (req, res) => {

        const categories = await Category.findAll();

        res.json(categories);
    }
}

module.exports = categoryController;