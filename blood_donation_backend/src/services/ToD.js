const status = require('http-status');
const Tod = require('../models').ToD;
const { NotFound } = require('../responses/errors');

class TodService {
   show() {
    return Tod.findAll();
  }

  findByID(id) {
    return Tod.findByPk(id);
  }

  create(payload) {
    return Tod.create(payload);
  }

  async update(id, payload) {
    const tod = await Tod.findByPk(id);
    if (!tod) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return tod.update(payload);
  }

  async delete(id) {
    const tod = await Tod.findByPk(id);
    if (!tod) {
      throw new NotFound(status['404_MESSAGE']);
    }
    return tod.destroy();
  }

  // async addDonorTod(ToDId, donorId) {
  //   const tod = await Tod.findByPk(ToDId);
  //   if( !tod ) {
  //     return null;
  //   }
  //   const todAdded = await tod.addDonor(donorId);
  //   return todAdded;
  // }
}

module.exports = new TodService();
