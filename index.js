const express = require('express');
const app = express();

app.use(express.static('public', { 'extensions': ['html'] }));
app.use(express.static('public', { 'extensions': ['js'], 'setHeaders': (res, path, stat) => { res.set('Content-Type', 'application/javascript'); } }));

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
