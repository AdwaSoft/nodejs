const path = require('path');

const edurekapath = '/home/mongo/Documents/Edureka Class/4. Node jS/Course1/4.VideoLecture/path.js';


console.log(path.dirname(edurekapath));
console.log(path.basename(edurekapath));
console.log(path.extname(edurekapath));
console.log(path.isAbsolute(edurekapath));
console.log(path.parse(edurekapath));