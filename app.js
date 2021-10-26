const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;

const tableRouter = require("./routes/routes");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/family", tableRouter);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
