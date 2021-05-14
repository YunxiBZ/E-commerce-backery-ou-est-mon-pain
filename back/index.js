require('dotenv').config();

const express = require('express');

const app = express();

const cors = require('cors');

const port = process.env.PORT || 5478;

const router = require('./app/router');

/**
 * cofig for CORS
 */
app.use(cors({
  optionsSuccessStatus: 200,
  credentials: true,
  allowedHeaders: ['Content-Type', 'authorization'],
  origin: ['http://ou-est-mon-pain-v1.surge.sh', 'http://localhost:8080', 'http://ou-est-mon-pain.surge.sh'],
}));

// le parser JSON qui récupère le payload quand il y en a un et le transforme en objet JS disponible sous request.body
app.use(express.json());

app.use('/api', router);

// ici, on pourrait aussi écrire notre 404

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
