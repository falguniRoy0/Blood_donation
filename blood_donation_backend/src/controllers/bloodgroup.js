const bloodGroupService = require('../services/bloodgroup');

class bloodGroupController {
  findAll(req, res, next) {
    return bloodGroupService.show();
  }

  findById(req, res, next) {
    const id = req.params.id;
    return bloodGroupService.findByID(id);
  }

  create(req, res, next) {
    let payload = req.body;
    return bloodGroupService.create(payload);
  }

  async update(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    await bloodGroupService.update(id, payload);
    return 'BloodGroup updated successfully';
  }

  async delete(req, res, next) {
    const id = req.params.id;
    await bloodGroupService.delete(id);
    return 'BloodGroup deleted successfully';
  }
}

module.exports = new bloodGroupController();
