// index.js
const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// Simple route to check the server is running
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
