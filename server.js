const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Test routes
app.get('/', (req, res) => {
  res.json({ message: 'KCI API Running' });
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'API working' });
});

// Comment DB for prod test
/*
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('DB Error:', err));
*/

// Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

