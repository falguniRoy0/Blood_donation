"use strict";

const fs = require("fs");
const handlebars = require("handlebars");

class Template {
  constructor() {
    this.templates = {};
  }

  async render(template_path, data) {
    let template = this.templates[template_path];

    if (!template) {
      template = await new Promise((resolve, reject) => {
        fs.readFile(template_path, "utf-8", (err, template_data) => {
          if (err) {
            return reject(err);
          }
          return resolve(handlebars.compile(template_data));
        });
      });
      this.templates[template_path] = template;
    }
    return template(data);
  }

  // register(helper_name, fn) {
  //   return handlebars.registerHelper(helper_name, fn);
  // }
}

module.exports = new Template();
