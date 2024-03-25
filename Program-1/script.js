
const fs = require("fs");
// const { setFlagsFromString } = require("v8");

function readFile(){
    console.log("inside readFile fun");
    return new Promise(function (resolve) {
        fs.readFile("a.txt", "utf-8", function (err, data) {
            console.log("inside Promise function");
            setTimeout(() => {
                console.log("inside settimeout func");
                data = data.toUpperCase();
                data = data.toLowerCase();
                // data = data.slice(3);
                // data = data.split();
                console.log(typeof data);
                data = data.replace("hi", "King Maker");
                // data = data.split(" ");
                console.log(typeof data);
                fs.writeFile("b.txt",data, "utf-8", function(err, value){
                    resolve(data);
                })
            }, 2000);
        });
    });
}

let a = 0;
for(let i=0;i< 5; i++){
    a = a + i;
}
console.log(a);

readFile().then(function(result){
    console.log(result)
})


// async function main() {

//     let result = await readFile() 
//         console.log("inside await function.");
//         console.log(result)
// }

// main();