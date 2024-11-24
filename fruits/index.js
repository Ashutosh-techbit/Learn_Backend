// the file name must be index.js bcz when we use in other directory the fruits will located to  index.js file name

const apple=require("./apple")
const banana=require("./banana")

const fruits=[apple,banana]

module.exports = fruits