var http = require('http')
var fs = require('fs');
fs.readFile('image.jpg', function(err, data) {
  if (err) throw err; // Fail if the file can't be read.
  http.createServer(function(bala1,bala) {
    bala.writeHead(200, {'Content-Type': 'image/jpeg'});
    bala.end(data); // Send the file data to the browser.
  }).listen(8124);
  console.log('Server running at http://localhost:8124/');
})
