const adminMW = (req, res, next) => {
    //est-ce que l'utilisateur est connecté
    console.log(req.token, req.role);
    if (!req.token) {
        return res.status(401).json({
            error: 'Il faut être connecté'
        });
    }
    //est-ce que l'utilisateur a le role admin
    if (req.role !== 'admin') {
        return res.status(403).json({
            error: 'Il faut être un admin'
        });
    }
    //sinon on appelle next
    next();
}

module.exports = adminMW;