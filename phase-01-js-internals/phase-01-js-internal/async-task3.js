async function getUser(){
    console.log("1");
    const user =await Promise.resolve("jony")

console.log("2",user);
return user;
}
console.log("3");
const result = getUser();
console.log("4",result);