const cordova = require("cordova");
const PLUGIN_NAME = "MlKitPlugin";

module.exports = {
  getText: (img, options, success, error) => {
    cordova.exec(success, error, PLUGIN_NAME, "getText", [img]);
  },
  getTextCloud: (img, options, success, error) => {
    options = options || {};
    const language = options.language || "";
    cordova.exec(success, error, PLUGIN_NAME, "getTextCloud", [img, language]);
  },
  getLabel: (img, options, success, error) => {
    cordova.exec(success, error, PLUGIN_NAME, "getLabel", [img]);
  },
  getLabelCloud: (img, options, success, error) => {
    cordova.exec(success, error, PLUGIN_NAME, "getLabelCloud", [img]);
  },
};
