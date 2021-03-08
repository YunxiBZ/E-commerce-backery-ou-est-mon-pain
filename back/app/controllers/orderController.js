const {
    Order,
    ProductOrder
} = require('../models')

const orderController = {

    postOrder: async (req, res) => {

        const {
            reception_date,
            products
        }

        const token = req.header('auth-token');
        const verified = jwt.verify(token, 'YuThJbAn')

        const id = verified.accountId;

        const newOrder = await Order.create({
            reception_date,
            account_id: id
        });

        for (const product of products) {
            await ProductOrder.create({
                order_id: newOrder.id,
                product_id: product
            })
        }

        if (newOrder) {
            res.status(201).json({
                message: 'Commande effectuée'
            });
        } else {
            res.sendStatus(400);
        }
    }
}