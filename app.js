const http = require('http');
const fs = require('fs');
const child_process = require('child_process');

http.createServer((req, res) => {
    const encodedUrl = decodeURI(req.url);
    fs.readFile( __dirname + encodedUrl , (err,data) => {
        if (err) {
            res.writeHead(404,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        } else {
            res.writeHead(200,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write(data);
            res.end();
        }
    });
}).listen(9998);

console.log('wfc server start listen 9998');
child_process.exec('start http://127.0.0.1:9998/index.html');