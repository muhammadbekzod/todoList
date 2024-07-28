const express = require("express");
const cors = require("cors");
const router = require("./routes/motor.router");
const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.use((req, res) => {
  res.status(404).send(`<h1>NOT FOUND</h1>`);
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server running on port:`, PORT);
});
