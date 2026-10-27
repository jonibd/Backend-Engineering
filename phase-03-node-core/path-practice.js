const path = require("path");
const filePath = path.join(__dirname,"data","products.json");
console.log(filePath);
//const fs = require("fs");

// if(fs.existsSync(filePath)){
//     console.log("File exists");
// }
// else{
//     console.log("File not exists");
// }
const fs = require("fs/promises");

async function readProducts() {
    try{
         const content = await fs.readFile(filePath, "utf8");
        console.log(content);
    }catch(error){
       console.log("Error",error.message);
    }
    
 const products = JSON.parse(content);
 console.log(products);
}

readProducts();

