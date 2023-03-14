const fs = require('fs');
const path = require('path');

// reading Simple JSON file

fs.readFile('./json/user.json', function(err, jasonData){
    if(err){
        console.log("not reading data")
    }else{
   const user = JSON.parse(jasonData)
  
   console.log(user)
   console.log(user.role)
    }
})

 // reading json file arrat of object file

 fs.readFile('./json/users.json', function(err, jasonData){
    if(err){
        console.log("not reading data")
    }else{
   const users = JSON.parse(jasonData)
   console.log("//////////////////////")
   console.log("Role Available in in AdwaBSP")
   console.log("----------------")
  for (let index = 0; index < users.length; index++) {
    const role = users[index].role ;
    const name = users[index].name;
    console.log(name)
    console.log(role)
    
  }
   
    }
})