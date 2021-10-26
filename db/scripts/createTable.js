let { query } = require("../index");

let sqlStatement = `CREATE TABLE familyResultBoard (
    id SERIAL PRIMARY KEY,
    name TEXT,
    score INTEGER
)`;

async function createTable() {
  let res = await query(sqlStatement);
  console.log(res);
}

createTable();
