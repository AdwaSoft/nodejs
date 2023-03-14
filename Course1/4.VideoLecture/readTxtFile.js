const fs = require('fs');
const path = require('path');

// reading Simple Txt Fie

fs.readFile('./learn.txt','utf8', function(err, data){
    if(err){
        console.log("not reading data")
    }else{
        console.log(data)
        // console.log(data.toString())

    }
})

//Reading JSON file and update it

