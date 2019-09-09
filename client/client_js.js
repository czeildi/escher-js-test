const http = require('http');
const Escher = require('escher-auth');

const escher = new Escher({
  credentialScope: 'example/credential/scope',
  accessKeyId: 'EscherJSExample',
  apiSecret: 'ildiescherjssecret',
  algoPrefix: 'EMS',
  vendorKey: 'EMS',
  authHeaderName: 'X-EMS-Auth',
  dateHeaderName: 'X-EMS-Date'
});

const requestOptions = {
  hostname: 'localhost',
  port: 8080,
  method: 'GET',
  path: '/validate_request_js_js',
  url: '/',
  headers: [
    ['X-EMS-Date', new Date().toISOString().replace(/[-:]/g, '').replace(/\.[0-9]+/, '')],
    ['host', 'localhost'],
  ],
};

const signedRequest = escher.signRequest(requestOptions, '', []);

const req = http.request(signedRequest, res => {
    res.setEncoding('utf8');
    res.on('data', chunk => console.log('Response: ' + chunk));
});

req.on('error', e => console.log('Got error: ' + e.message));

req.end();
