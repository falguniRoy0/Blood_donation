const bloodIssuedService = require('../services/bloodissued');

class bloodIssuedController {
  findAll(req, res, next) {
    return userGroupService.show();
  }

  findById(req, res, next) {
    const id = req.params.id;
    return bloodIssuedService.findByID(id);
  }

  create(req, res, next) {
    let payload = req.body;
    return bloodIssuedService.create(payload);
  }

  async update(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    await bloodIssuedService.update(id, payload);
    return 'BloodIssued updated successfully';
  }

  async delete(req, res, next) {
    const id = req.params.id;
    await bloodIssuedService.delete(id);
    return 'BloodIssued deleted successfully';
  }
}

module.exports = new bloodIssuedController();
