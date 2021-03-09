const {
    Order,
    ProductOrder
} = require('../models')
const jwt = require('jsonwebtoken')

const orderController = {

    postOrder: async (req, res) => {

        const {
            reception_date,
            total_price,
            products
        } = req.body

        const token = req.header('auth-token');
        const verified = jwt.verify(token, 'YuThJbAn')

        const id = verified.accountId;

        const newOrder = await Order.create({
            reception_date,
            total_price,
            account_id: id,
        });

        for (const product of products) {
            await ProductOrder.create({
                order_id: newOrder.id,
                product_id: product.id,
                quantity: product.quantity
            })
        }

        if (newOrder) {
            res.status(201).json({
                message: 'Commande effectuée'
            });
        } else {
            res.sendStatus(400);
        }
    },

    OrderById: async (req, res) => {
        const token = req.header('auth-token');
        const verified = jwt.verify(token, 'YuThJbAn')

        const id = verified.accountId;

        const orders = await Order.findAll({
            where: {
                account_id: id
            },
            include: ['ord_products', 'products_in_order']
        });

        if (orders) {
            res.json(orders);
        } else {
            res.json("Il n'y a pas de commandes de cet utilisateur");
        }
    }
};

module.exports = orderController;