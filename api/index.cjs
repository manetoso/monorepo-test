const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static('./public/index.html'));

app.get('/api', (req, res) => {
  const message = {
    ok: true,
    message: 'Hello World from API!',
  };
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  return res.send(message);
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});

module.exports = app;
