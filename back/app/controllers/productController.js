const {
    Product,
    ProductCategory
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

        // Création d'un nouveau produit
        const newProduct = await Product.create({
            title,
            description,
            price,
            image
        })

        // Création des éléments de la table de liasion ProductCategory
        for (const category of categories) {
            await ProductCategory.create({
                product_id: newProduct.id,
                category_id: category
            })
        }

        if (newProduct) {
            res.status(201).json({
                message: 'produit créé'
            });
        } else {
            res.sendStatus(400);
        }
    },

    modifyProduct: async (req, res) => {

        const {
            id,
            title,
            description,
            price,
            image,
            categories
        } = req.body;

        // Modification d'un produit
        const modifiedProduct = await Product.update({
            title,
            description,
            price,
            image
        }, {
            where: {
                id
            }

        })

        // Suppression des éléments de la table de liasion ProductCategory pour modification
        await ProductCategory.destroy({
            where: {
                product_id: id
            }
        })

        // Création des nouveaux éléments de la table de liasion ProductCategory
        for (const category of categories) {
            await ProductCategory.create({
                product_id: id,
                category_id: category
            })
        }

        if (modifiedProduct) {
            res.status(200).json({
                message: 'product modifié'
            });
        } else {
            res.sendStatus(400);
        }
    },

    deleteProduct: async (req, res) => {

        const {
            id
        } = req.body;

        // Suppression des éléments de la table de liasion ProductCategory pour modification
        await ProductCategory.destroy({
            where: {
                product_id: id
            }
        })

        // Suppression du produit
        const deletedProduct = await Product.destroy({
            where: {
                id
            }
        });

        if (deletedProduct) {
            res.status(200).json({
                message: 'produit supprimé'
            });
        } else {
            res.sendStatus(400);
        }
    }
}

module.exports = productController;