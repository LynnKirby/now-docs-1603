const fs = require("fs");
const path = require("path");
const process = require("process");

const script = process.argv[2];
console.log(`${script}: starting`);

const pathname = path.join(__dirname, "data.json");

if (fs.existsSync(pathname)) {
    console.log(`${script}: data.json exists`);
} else {
    const data = { script };
    console.log(`${script}: data.json does not exist`);
    fs.writeFileSync(pathname, JSON.stringify(data), { encoding: "utf8" });
    console.log(`${script}: data.json was written`);
}
