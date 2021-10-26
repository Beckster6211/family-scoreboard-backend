const { query } = require("../db/index");

// get all from table
async function getAll() {
  const result = await query("SELECT * FROM familyResultBoard;");
  return result.rows;
}

// add to table
async function addMember(data) {
  const { name, score } = data;
  const result = await query(
    `INSERT INTO familyResultBoard (name, score)
        VALUES ($1, $2) RETURNING *`,
    [name, score]
  );
  return result.rows[0];
}

// delete by id
async function deleteById(id) {
  const result = await query(
    `DELETE FROM familyResultBoard WHERE id = $1 RETURNING id`,
    [id]
  );
  return result.rows[0];
}

module.exports = {
  getAll,
  addMember,
  deleteById,
};
