const express = require('express');
const PORT = 5000;
const app = express();

app.get('/todo', (req, res) => {
  res.json(['simple', 'api', 'docker', 'nodejs']);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
