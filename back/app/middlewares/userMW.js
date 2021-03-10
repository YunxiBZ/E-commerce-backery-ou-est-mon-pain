const jwt = require('jsonwebtoken');

const userMW = async (req, res, next) => {

    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).send('Non connecté');
    }

    const verified = jwt.verify(token, 'YuThJbAn')

    if (!verified) {
        return res.status(400).send('Token invalide');
    }

    next();
}

module.exports = userMW;