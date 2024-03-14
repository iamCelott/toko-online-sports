const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const fs = require("fs").promises;

const productFilePath = path.join(__dirname, "../products.json");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Izinkan semua asal
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", async (req, res) => {
  try {
    const productData = await fs.readFile(productFilePath, "utf-8");
    const products = JSON.parse(productData);
    res.json(products);
  } catch (error) {
    console.error("Error reading data:", error);
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
