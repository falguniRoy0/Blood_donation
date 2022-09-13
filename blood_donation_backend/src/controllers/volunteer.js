const volunteerService = require('../services/volunteer');

class volunteerController {
  findAll(req, res, next) {
    return volunteerService.show();
  }

  findById(req, res, next) {
    const id = req.params.id;
    return volunteerService.findByID(id);
  }

  create(req, res, next) {
    let payload = req.body;
    return volunteerService.create(payload);
  }

  async update(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    await volunteerService.update(id, payload);
    return 'Volunteer updated successfully';
  }

  async delete(req, res, next) {
    const id = req.params.id;
    await volunteerService.delete(id);
    return 'Volunteer deleted successfully';
  }
}

module.exports = new volunteerController();
