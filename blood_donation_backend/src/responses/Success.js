module.exports = class Success {
  constructor(statusMessage, message, statusCode, data) {
    this.status = 'success';
    this.statusCode = statusCode;
    this.statusMessage = statusMessage || 'OK';
    this.message = message;

    if ((typeof data || {}).metadata === 'object' && (data || {}).metadata) {
      this.metadata = JSON.parse(JSON.stringify(data.metadata));
      delete data.metadata;
    }

    this.data = (data || {}).data ? data.data : data;
  }
};
