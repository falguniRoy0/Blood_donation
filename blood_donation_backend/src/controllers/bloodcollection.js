const bloodCollectionService = require('../services/bloodcollection');

class bloodCollectionController {
  findAll(req, res, next) {
    return bloodCollectionService.show();
  }

  findById(req, res, next) {
    const id = req.params.id;
    return bloodCollectionService.findByID(id);
  }

  create(req, res, next) {
    let payload = req.body;
    return bloodCollectionService.create(payload);
  }

  async update(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    await bloodCollectionService.update(id, payload);
    return 'BloodCollection updated successfully';
  }

  async delete(req, res, next) {
    const id = req.params.id;
    await bloodCollectionService.delete(id);
    return 'BloodCollection deleted successfully';
  }
}

module.exports = new bloodCollectionController();
