const express = require('express');
const cors = require('cors');
const proxy = require('http-proxy-middleware');
const ejs = require('ejs');

const port = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.static('public'));

app.engine('html', ejs.renderFile);
app.get('/:id', (req, res) => {
  res.render('../public/index.html');
});

// app.use(proxy('/api/experiences', {target: 'http://18.217.113.225:3001/' }));
// app.use(proxy('/photos', {target: 'http://localhost:3003/' }));
// app.use(proxy('/calendar', {target: 'http://localhost:3005/' }));
// app.use(proxy('/reviews', {target: 'http://localhost:3007/' }));



app.listen(port, console.log(`Server is running on port ${port}`));