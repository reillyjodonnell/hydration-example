import express from 'express';
import path from 'path';
const app = express();

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
