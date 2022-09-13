var token;
function storeToken(authToken) {
    token = authToken;
}

function getToken() {
    return token;
}

module.exports = {
    storeToken,
    getToken
}