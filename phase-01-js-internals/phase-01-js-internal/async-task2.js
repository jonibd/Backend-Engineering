async function getData() {
  try {
    const result = await Promise.resolve("Success");
    console.log("A", result);
  } catch (error) {
    console.log("B");
  }

  console.log("C");
}

getData();
console.log("D");