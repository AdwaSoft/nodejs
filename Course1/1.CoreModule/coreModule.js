// Fs

const fs = require('fs')
fs.writeFileSync('app.txt',"hello this is feirst")

// PATH

const path = require('path')
var p = '/home/mongo/Documents/Edureka Class/4. Node jS/DAY1/app.txt'

console.log(path.basename(p));   // app.txt
console.log(path.dirname(p));     // /home/mongo/Documents/Edureka Class/4. Node jS/DAY1
console.log(path.extname(p));     //.txt
console.log(path.isAbsolute(p));  //true

///bufer
var buf1 = Buffer.from('12378999');
var buf2 = Buffer.from('hello');

buf2.copy(buf1, 2);
console.log(buf1.toString())
console.log(Buffer.concat([buf1,buf2]).toString());
console.log(buf1.equals(buf2));
console.log(Buffer.compare(buf1, buf2));

// HTTP Module
var http = require('http')
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.write('hello world');
    res.end();
}).listen(8080)

//URL 
var url = require('url');
var add = 'https://learning.edureka.co/classroom/presentation/1905/16600/1531006?tab=CourseContent';
var q = url.parse(add , true);
console.log(q.hostname);
console.log(q.host);
console.log(q.href);
console.log(q.pathname);
console.log(q.search);
console.log(q.port);

// UTIL Module
var util = require('util');
var txt = 'congra %s on his %dth birthday';
var result = util.format(txt, 'melke',32);
console.log(result);

// OS Module
var os = require('os')
console.log('Platform' + os.platform());

console.log('Architecture' + os.arch());

console.log('machone' + os.machine());
console.log('release' + os.release());
console.log('vrrsion' + os.version());

