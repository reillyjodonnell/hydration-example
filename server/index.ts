import express from 'express';
const app = express();

const port = process.env.PORT || 3000;

console.log(__dirname);
app.use(express.static('public'));
console.log(__dirname);

app.use('/resources', express.static(__dirname + '/images'));
console.log(__dirname);

app.get('/', (req, res) => {
  console.log(__dirname);

  res.sendFile('/public/index.html');
});

app.use(express.static('dist'));
console.log(__dirname);

app.listen(port, () => {
  console.log(`listening on port ${port} :D<33`);
});
