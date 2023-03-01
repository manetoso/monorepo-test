import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.static('../app/dist'));

app.get('/api', (req, res) => {
  const message = {
    ok: true,
    message: 'Hello World from API!',
  };
  return res.send(message);
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});

module.exports = app;
