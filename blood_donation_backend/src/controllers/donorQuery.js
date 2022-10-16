const donorQueryService = require('../services/donorQuery');

class donorQueryController {
  findAll(req, res, next) {
    return donorQueryService.show();
  }

  findById(req, res, next) {
    const id = req.params.id;
    return donorQueryService.findByID(id);
  }

  create(req, res, next) {
    let payload = req.body;
    return donorQueryService.create(payload);
  }

  async update(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    await donorQueryService.update(id, payload);
    return 'donorQuery updated successfully';
  }

  async delete(req, res, next) {
    const id = req.params.id;
    await donorQueryService.delete(id);
    return 'donorQuery deleted successfully';
  }
}

module.exports = new donorQueryController();
