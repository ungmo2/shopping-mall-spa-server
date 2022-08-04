const express = require('express');
var cors = require('cors');
const app = express();
const products = require('./api/products');

// app.use(cors());
app.use(express.json());
app.use('/api/products', products);

const PORT = 13300;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

module.exports = app;
