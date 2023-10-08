const data = "Example data to create file";

await Bun.write("output.txt", data);

const file = Bun.file("output.txt");

console.log(await file.text());
console.log(file.size);
console.log(file.stream());
console.log(await file.arrayBuffer());
