const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const fs = require("fs").promises;

const productFilePath = path.join(__dirname, "../products.json");

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
