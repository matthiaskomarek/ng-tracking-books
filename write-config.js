const fs = require('fs');

const config = {
  API_URL: process.env.API_URL || ''
};

fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
