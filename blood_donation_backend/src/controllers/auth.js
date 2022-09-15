const authService = require('../services/auth');

class AuthController {
  create(req, res, next) {
    let payload = req.body;
    return authService.save(payload);
  }

  async login(req, res, next) {
    let payload = req.body;
    return authService.login(payload);
  }
}

module.exports = new AuthController();
