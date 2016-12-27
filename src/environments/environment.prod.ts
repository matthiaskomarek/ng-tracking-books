const config = require('../../config.json');
const version = require('../../package.json').version;

export const environment = {
  production: true,
  API_URL: config.API_URL,
  version
};
