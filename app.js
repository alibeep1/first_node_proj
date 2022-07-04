const fs = require('fs');

const path = "F:/AUC/Summer 22'/1_Intro_to_Cloud_Computing";
// const files = fs.readdirSync(path);
// console.log(files);

fs.readdir(path, function(err, files){
    if (err) {
        console.log("Error: " + err);
    }
    else{
        console.log("Result: " + files)
    }
})