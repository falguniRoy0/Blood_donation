const { getToken } = require('../utils/session');
function authenticate(req, res, next) {
    var token = getToken();
    if (!token) {
        res.redirect('/signin');
    } else {
        next();
    }
}

module.exports = authenticate;