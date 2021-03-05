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
        } = req.body;

        const newCategory = await Category.create({
            label,
            image
        });

        if (newCategory) {
            res.status(201).json({
                message: 'catégorie créée'
            });
        }
    },

    modifyCategory: async (req, res) => {

        const {
            id,
            label,
            image
        } = req.body;

        const modifiedCategory = await Category.update({
            label,
            image
        }, {
            where: {
                id
            }
        });

        if (modifiedCategory) {
            res.status(200).json({
                message: 'catégorie modifiée'
            });
        }
    },

    deleteCategory: async (req, res) => {

        const {
            id
        } = req.body;

        const deletedCategory = await Category.destroy({
            where: {
                id
            }
        });

        if (deletedCategory) {
            res.status(200).json({
                message: 'catégorie supprimée'
            });
        }
    }
}

module.exports = categoryController;