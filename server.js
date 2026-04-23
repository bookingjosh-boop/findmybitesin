const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Basic Route for testing
app.get('/api/v1', (req, res) => {
  res.json({ success: true, message: "Welcome to FindMyBites API - One Platform. One Faith." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
