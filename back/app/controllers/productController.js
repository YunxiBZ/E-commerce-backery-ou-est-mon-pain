const {
    Product
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

    }
}

module.exports = productController;