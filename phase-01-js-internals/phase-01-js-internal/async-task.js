function getUser(){
    return Promise.reject(new Error("Database failed"));
}
async function main(){
    console.log("A");
    try{
        const user = await getUser();
        console.log("B");
    }catch (error){
      console.log("C", error.message);
    };
    console.log("D");
    
}

main();
console.log("E");