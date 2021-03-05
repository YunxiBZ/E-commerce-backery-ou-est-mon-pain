const jwt = require('jsonwebtoken');
const {
    Account
} = require('../models');

const adminMW = async (req, res, next) => {

    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send('Non connecté');
    }

    const verified = jwt.verify(token, 'YuThJbAn')

    const theUser = await Account.findByPk(verified.accountId);

    //est-ce que l'utilisateur a le role admin
    if (theUser.role !== 'admin') {
        return res.status(403).json({
            error: 'Il faut être un admin'
        });
    }
    //sinon on appelle next
    next();
}

module.exports = adminMW;