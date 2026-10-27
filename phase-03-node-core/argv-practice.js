console.log("Name:", process.argv[2]);
const age=Number(process.argv[3]);
if((isNaN(age )|| age <=0 || age>120)){
    console.log("invalid age");
}
else{
    console.log("Age:",age);
}