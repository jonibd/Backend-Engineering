async function getUser()
{
    throw new Error("Dagtabase unavailable");
}

async function main(){
    console.log("request started");
    try{
        const user = await getUser();
        console.log("User:",user)
    }catch(error){
        console.log("Failed",error.message);
    }
    console.log("Request finished");
}
main();