const todService = require('../services/ToD');

class TodController {
   findAll(req, res, next) {
    return todService.show();
  }

  findById(req, res, next) {
    const id = req.params.id;
    return todService.findByID(id);
  }

  create(req, res, next) {
    let payload = req.body;
    return todService.create(payload);
  }

  async update(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    await todService.update(id, payload);
    return 'Type of Donation updated successfully';
  }

  async delete(req, res, next) {
    const id = req.params.id;
    await todService.delete(id);
    return 'Type of Donation deleted successfully';
  }

  // async addDonorTod(req, res, next){
  //   const ToDId = req.params.ToDId;
  //   const donorId = req.params.donorId;

  //   const tod = await todService.addDonorTod(ToDId, donorId);
  //   console.log(tod);
  //   return res.send({ ToDId, donorId });
  // }
}

module.exports = new TodController();
