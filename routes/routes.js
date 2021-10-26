const express = require("express");
const router = express.Router();

const { getAll, addMember, deleteById } = require("../models/models");

router.get("/", async (req, res, next) => {
  const result = await getAll();
  res.json({ success: true, payload: result });
  next();
});

router.post("/", async (req, res, next) => {
  let member = req.body;
  let table = await addMember(member);
  res.json({ success: true, payload: table });
  next();
});

router.delete("/:id", async (req, res, next) => {
  let id = req.params.id;
  let member = await deleteById(id);
  res.json({ success: true, payload: member });
  next();
});

module.exports = router;
