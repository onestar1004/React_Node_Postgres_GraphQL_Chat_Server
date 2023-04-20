require("dotenv").config();

let PORT = process.env.PORT;
//let JWT_SECRET = process.env.JWT_SECRET;
// let PORT = 4000;
let JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  PORT,
  JWT_SECRET,
};
