const PORT = Number(process.env.PORT || 3000);

if(isNaN(PORT)||PORT<=0||PORT>65535){
    console.log("Invalid port error");
}

else{
    console.log("Server Port:", PORT);
}

console.log("Directory:", __dirname);
console.log("File:", __filename);