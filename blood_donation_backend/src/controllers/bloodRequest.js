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
    // console.log(payload);
    let bloodRequest = await bloodRequestService.create(payload);
    console.log(bloodRequest);
    // console.log(bloodRequest);
    // if( !bloodRequest ) {
    //   throw new Error('something wrong!!');
    // }
    // mailer.sendMail({
    //   from: "flowred70@gmail.com",
    //   to: bloodRequest.include,
    //   subject: "REDFLOW//BLOOD-REQUEST!!",
    //   template: {
    //     name: "bloodRequest.html",
    //     data: {
    //       donorName: bloodRequest.rows.Donor.name,
    //       recipientName: bloodRequest.rows.Recipient.name,
    //       recipientEmail: bloodRequest.rows.Recipient.email,
    //       recipientCity: bloodRequest.rows.Recipient.city,
    //       date: payload.dateOfRequest,
    //       bloodGroup: payload.blood_group,
    //       bags: payload.numOfBags,
    //       location: payload.location,
    //       company: "REDFLOW"
    //     }
    //   }
    // });
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
