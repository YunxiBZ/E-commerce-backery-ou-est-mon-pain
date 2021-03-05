const {
    Product,
    Category
} = require('../models');

const productController = {

    getAllProducts: async (req, res) => {

        const products = await Product.findAll({
            include: ['categories']
        });

        res.json(products);
    },

    getOneProduct: async (req, res) => {

        const {
            id
        } = req.params

        const theProduct = await Product.findByPk(id)

        res.json(theProduct);

    },

    createProduct: async (req, res) => {

        const {
            title,
            description,
            price,
            image,
            categories
        } = req.body;

        const newProduct = await Product.create({
            title,
            description,
            price,
            image,
            categories: [{
                id: categories[0].id
            }]
        }, {
            include: ['categories']
        });

        if (newProduct) {
            res.status(201).json({
                message: 'produit créé'
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

module.exports = productController;