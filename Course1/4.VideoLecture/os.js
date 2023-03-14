const system = require('os');

console.log('platform:' + system.platform())
console.log('arch:' + system.arch())
console.log('release:' + system.release())
for (let index = 0; index < system.cpus().length; index++) {
   
console.log(system.cpus()[index])
    
}

console.log('cpus:' + system.cpus().length)
