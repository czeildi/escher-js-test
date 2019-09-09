const express = require('express');

const app = express();

app.get('/validate_request_js_js', (req, res) => {
  console.log(req.path, req.headers)
  res.send('request from js to js: ' + req.headers['x-ems-date']);
});

app.get('/validate_request_py_js', (req, res) => {
  console.log(req.path, req.headers)
  res.send('request from py to js: ' + req.headers['x-ems-date']);
});

console.log('app listening on port ' + 8080);

app.listen(8080);
