const dotenv = require("dotenv");
dotenv.config();
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  //   host: "ec2-34-249-247-7.eu-west-1.compute.amazonaws.com",
  //   database: "denieplrkjt585",
  //   user: "seuhaxalddfeka",
  //   password: "ee6adcdbf08f86132a7a29a65a9af873c0f0c0fcc0f42b748554ada2cb49252c",
  //   port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
