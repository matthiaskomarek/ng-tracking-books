import * as packageJson from '../../package.json';
import * as config from '../../config.json';

export const environment = {
  production: false,
  API_URL: (<any>config).API_URL,
  version: (<any>packageJson).version
};
