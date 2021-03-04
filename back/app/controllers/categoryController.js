const {
    Category
} = require('../models');

const categoryController = {

    getAllCategories: async (req, res) => {

        const categories = await Category.findAll();

        res.json(categories);
    },

    createCategory: async (req, res) => {

        const {
            label,
            image
        } = req.body

        await Category.create({
            label,
            image
        })

        res.status(201).json({
            message: 'catégorie créée'
        })

    }
}

module.exports = categoryController;