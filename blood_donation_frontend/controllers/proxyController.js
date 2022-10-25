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

  '/api/role': {
    service: 'BLOOD_DONATION_CLIENT',
    endpoint: 'roles'
  },

  '/api/ToD': {
    service: 'BLOOD_DONATION_CLIENT',
    endpoint: 'ToDs'
  },

  '/api/blood-group': {
    service: 'BLOOD_DONATION_CLIENT',
    endpoint: 'blood-groups'
  },

  '/api/donorQuerie': {
    service: 'BLOOD_DONATION_CLIENT',
    endpoint: 'donorQueries'
  },
  
  '/api/auth/login': {
    service: 'BLOOD_DONATION_CLIENT',
    endpoint: 'auth/login'
  },

  '/api/user/Donor': {
    service: 'BLOOD_DONATION_CLIENT',
    endpoint: 'users/Donor'
  },

  '/api/user/Recipient': {
    service: 'BLOOD_DONATION_CLIENT',
    endpoint: 'users/Recipient'
  },

  '/api/contact': {
    service: 'BLOOD_DONATION_CLIENT',
    endpoint: 'contacts'
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
