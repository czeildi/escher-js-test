const http = require('http');

const requestOptions = {
  host: 'localhost',
  port: 8080,
  method: 'GET',
  path: '/validate_request_js_js',
  headers: [
      ['X-EMS-Date', (new Date()).toUTCString()],
  ],
}

const req = http.request(requestOptions, res => {
    res.setEncoding('utf8');
    res.on('data', chunk => console.log('Response: ' + chunk));
});

req.on('error', e => console.log('Got error: ' + e.message));

req.end();
