let { query } = require("../index");

let sqlStatement = `DROP TABLE IF EXISTS familyResultBoard`;

async function dropTable() {
  let res = await query(sqlStatement);
  console.log(res);
}

dropTable();
