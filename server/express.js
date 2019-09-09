const express = require('express');
const Escher = require('escher-auth');

const app = express();

function keyDB(accessKeyId) {
  const db = {
    EscherJSExample: 'ildiescherjssecret',
    EscherPyExample: 'ildiescherpysecret'
  };
  return db[accessKeyId];
}

const escher = new Escher({
  credentialScope: 'example/credential/scope',
  algoPrefix: 'EMS',
  vendorKey: 'EMS',
  authHeaderName: 'X-EMS-Auth',
  dateHeaderName: 'X-EMS-Date',
  clockSkew: 100800,
});

app.get('/validate_request_js_js', (req, res) => {
  console.log(req.path, req.headers);
  console.log(keyDB('EscherJSExample'));
  try {
    escher.authenticate(req, keyDB);
    res.send('OK: request from js to js');
  } catch (e) {
    res.send('ERROR: request from js to js: ' + e.message);
  }
});

app.get('/validate_request_py_js', (req, res) => {
  console.log(req.path, req.headers);
  console.log(keyDB('EscherPyExample'));
  try {
    escher.authenticate(req, keyDB);
    res.send('OK: request from js to js');
  } catch (e) {
    res.send('ERROR: request from py to js: ' + e.message);
  }
});

console.log('app listening on port ' + 8080);

app.listen(8080);
