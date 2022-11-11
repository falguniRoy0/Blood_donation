const { getToken } = require('../utils/session');
function authenticate(req, res, next) {
    var token = getToken();
    if (!token) {
        res.redirect('/aSignin');
    } else {
        next();
    }
}

module.exports = authenticate;