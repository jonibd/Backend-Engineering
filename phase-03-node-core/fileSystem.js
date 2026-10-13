

//promise resolve
async function getNumber(){
    return 25;
}

async function main(){
    const result = await getNumber();
    console.log(result+5);
}

main();

//promise rejects
async function getData() {
  throw new Error("Database failed");
}

async function main() {
  try {
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.log("Caught:", error.message);
  }
}

main();

//Error Handle

async function getData() {
  throw new Error("Database failed");
}

async function main() {
  try {
    await getData();
  } catch (error) {
    console.log("Error handled");
  }

  console.log("Program continues");
}

main();

async function getPrice() {
  return 100;
}

async function main() {
      console.log("hi");
  try {
    const price = await getPrice();
    console.log(price * 2);
  } catch (error) {
    console.log("Error occurred");
  }
  console.log("hi");
}
  console.log("hlw");
main();
  console.log("hii");


async function getData() {
  throw new Error("Database failed");
}

async function main() {
  try {
     console.log("hi");
    await getData();
    console.log("Success");
  } catch (error) {
    console.log("Failed");
  }

  console.log("Finished");
}

main();