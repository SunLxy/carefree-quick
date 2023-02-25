// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const CAREFREE_PASSWORD = process.env.CAREFREE_PASSWORD;
const CAREFREE_USERNAME = process.env.CAREFREE_USERNAME;
const CAREFREE_HOST = process.env.CAREFREE_HOST;
const CAREFREE_PORT = process.env.CAREFREE_PORT;

const temps = `
export default {
  CAREFREE_PASSWORD:${JSON.stringify(CAREFREE_PASSWORD)},
  CAREFREE_USERNAME:${JSON.stringify(CAREFREE_USERNAME)},
  CAREFREE_PORT:${JSON.stringify(CAREFREE_PORT)},
  CAREFREE_HOST:${JSON.stringify(CAREFREE_HOST)},
}
`;

fs.writeFileSync(path.join(__dirname, '../src/data.ts'), temps, { flag: 'w+', encoding: 'utf-8' });
