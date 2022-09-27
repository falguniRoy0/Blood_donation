const { BLOOD_DONATION_CLIENT } = require('../utils/request');

const proxyEndpointMap = {
  '/api/user': {
    service: 'BLOOD_DONATION_CLIENT',
    endpoint: 'users'
  },

  '/api/auth': {
    service: 'BLOOD_DONATION_CLIENT',
    endpoint: 'auth'
  },
  
  '/api/auth/login': {
    service: 'BLOOD_DONATION_CLIENT',
    endpoint: 'auth/login'
  },

  '/api/user/Donor': {
    service: 'BLOOD_DONATION_CLIENT',
    endpoint: 'users/Donor'
  },
};

const endPointKeys = Object.keys(proxyEndpointMap);
class ProxyController {
  async index(req, res, next) {
    let response;
    let endPointObj = ProxyController.prototype.getEndpointObj(req.url);
    if (!endPointObj) {
      return next();
    }
    if (endPointObj.service == 'BLOOD_DONATION_CLIENT') {
      response = await BLOOD_DONATION_CLIENT(
        req.method,
        endPointObj.url,
        req.body
      );
    }
    if (req.xhr) {
      res.json(response);
    } else {
      return response;
    }
  }

  getEndpointObj(url) {
    for (let endPointKey of endPointKeys) {
      if (url.indexOf(endPointKey) == 0) {
        let obj = JSON.parse(JSON.stringify(proxyEndpointMap[endPointKey]));
        obj.url = url.replace(endPointKey, obj.endpoint);
        return obj;
      }
    }
  }
}

module.exports = new ProxyController();
