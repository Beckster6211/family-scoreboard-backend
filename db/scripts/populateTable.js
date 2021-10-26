let { query } = require("../index");

let family = require("../../family");

let insertData = `INSERT INTO familyResultBoard (name, score) VALUES($1, $2) RETURNING *;`;

async function populateTable(array) {
  for (let index = 0; index < array.length; index++) {
    let values = [array[index].name, array[index].score];
    let res = await query(insertData, values);
    console.log(res);
  }
}

populateTable(family);
