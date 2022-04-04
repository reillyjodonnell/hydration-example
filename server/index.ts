import express from 'express';
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('/public/index.html');
});

app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`listening on port ${port} :D<33`);
});
