// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const CAREFREE_PASSWORD = process.env.CAREFREE_PASSWORD;
const CAREFREE_USERNAME = process.env.CAREFREE_USERNAME;
const temps = `
export default {
  CAREFREE_PASSWORD:${JSON.stringify(CAREFREE_PASSWORD)},
  CAREFREE_USERNAME:${JSON.stringify(CAREFREE_USERNAME)},
}
`;

fs.writeFileSync(path.join(__dirname, '../src/data.ts'), temps, { flag: 'w+', encoding: 'utf-8' });
