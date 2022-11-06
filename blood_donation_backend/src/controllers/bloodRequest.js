const bloodRequestService = require('../services/bloodRequest');

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
    if( !bloodRequest ) {
      throw new Error('something wrong!!');
    }
    mailer.sendMail({
      from: "flowred70@gmail.com",
      to: payload.Donor.email,
      subject: "REDFLOW//BLOOD-REQUEST!!",
      template: {
        name: "bloodRequest.html",
        data: {
          donorName: payload.Donor.name,
          recipientName: payload.Recipient.name,
          recipientEmail: payload.Recipient.email,
          recipientCity: payload.Recipient.city,
          date: payload.dateOfRequest,
          bloodGroup: payload.blood_group,
          bags: payload.numOfBags,
          location: payload.location,
          company: "REDFLOW"
        }
      }
    });
    // res.send("Send HTML file successfully");
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
}

module.exports = new bloodRequestController();
