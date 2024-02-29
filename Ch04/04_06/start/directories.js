const fs = require("fs");

fs.rmdir("./accounts", function (err) {
    if(err){
        console.log(err);
    } else {
        console.log("Directory removed");
    }
});