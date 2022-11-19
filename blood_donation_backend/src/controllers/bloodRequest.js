const bloodRequestService = require('../services/bloodRequest');
const mailer = require("../utils/mailer");

class bloodRequestController {
  findAndCountAll(req, res, next) {
    return bloodRequestService.show();
  }

  findById(req, res, next) {
    const id = req.params.id;
    return bloodRequestService.findByID(id);
  }

  async create(req, res, next) {
    let payload = req.body;
    let bloodRequest = await bloodRequestService.create(payload);
    if (!bloodRequest) {
      throw new Error('something wrong!!');
    }
    let donor = await bloodRequest.getDonor();
    let recipient = await bloodRequest.getRecipient();

    mailer.sendMail({
      from: 'flowred70@gmail.com',
      to: donor.email,
      subject: 'REDFLOW//BLOOD-REQUEST!!',
      template: {
        name: 'bloodRequest.html',
        data: {
          donorName: donor.name,
          recipientName: recipient.name,
          recipientEmail: recipient.email,
          recipientCity: recipient.city,
          date: bloodRequest.dateOfRequest,
          bloodGroup: bloodRequest.blood_group,
          bags: bloodRequest.numOfBags,
          location: bloodRequest.location,
          company: 'REDFLOW'
        }
      }
    });
    return bloodRequest;
  }

  async update(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    await bloodRequestService.update(id, payload);
    return 'BloodRequest updated successfully';
  }

  async delete(req, res, next) {
    const id = req.params.id;
    await bloodRequestService.delete(id);
    return 'BloodRequest deleted successfully';
  }

  // findReqRes(req, res, next) {
  //   const id = req.params.recipient.id;
  //   return bloodRequestService.findByID(id);
  // }
}

module.exports = new bloodRequestController();
