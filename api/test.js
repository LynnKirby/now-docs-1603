const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
    const filename = path.join(__dirname, "../", "data.json");
    res.status(200).json(fs.readFileSync(filename, { encoding: "utf8" }))
}
