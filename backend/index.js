const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const DataSchema = mongoose.model(
  "Datas",
  new mongoose.Schema({
    name: String,
    des: String,
    price: Number,
    basket: Array,
    wishlist: Array,
  })
);

app.get("/datas", async (req, res) => {
  let allData = await DataSchema.find({});
  res.send({ message: "success", data: allData });
});

app.delete("/datas/:id", async (req, res) => {
  let id = req.params.id;
  let deleteData = await DataSchema.findByIdAndDelete(id);
  res.send({ message: "success", data: deleteData });
});

app.post("/datas", async (req, res) => {
  let newData = await new DataSchema(req.body);
  newData.save();
  res.send({ message: "success", newData: newData });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("mongodg connected");
  })
  .catch((err) => {
    console.log("failed connect");
  });
