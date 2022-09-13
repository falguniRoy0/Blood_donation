const authService = require('../services/auth');


class AuthController {
    async create(req, res, next) {
        let payload = req.body;
        const user = await authService.create(payload);
        return res.send({
            user
        });
    }

    async login(req, res, next) {
        let payload =req.body;
        const token = await authService.login(payload);
        return res.send(token);
    }
}

module.exports = new AuthController();