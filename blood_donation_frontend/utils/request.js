const request = require('request');
const { getToken } = require('../utils/session');

function BLOOD_DONATION_CLIENT(method, endPoint, data = {}) {
  let options = {
    url: `${process.env.BLOOD_DONATION_URL}:${process.env.BLOOD_DONATION_PORT}/${endPoint}`,
    method: method,
    headers: {
      'Content-Type': 'application/json',
      token: getToken() ? getToken() : ''
    },
    json: true
  };

  if (Object.keys(data).length > 0) {
    options.body = data;
  }

  let request_call = new Promise((resolve, reject) => {
    request(options, function (err, res, body) {
      if (err) {
        return reject(err);
      }
      resolve(body);
    });
  });
  return request_call;
}

module.exports = {
  BLOOD_DONATION_CLIENT
};
