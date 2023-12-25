const express = require("express");
const router = express.Router()
const db = require("../data/db");

router.use("/products/:id", async function (req, res) {
  try {
    const [products] = await db.execute("select * from products");
    const product = products.find((u) => u.id == req.params.id);
    res.render("productDetails", product);
  } catch (err) {
    console.log(err);
  }
});

router.use("/products", async function (req, res) {
  try {
    const [products] = await db.execute("select * from products");
    res.render("products", {
      data: products,
    });
  } catch (err) {
    console.log(err);
  }
});

router.use("/", async function (req, res) {
  try {
    const [products] = await db.execute(
      "select * from products where isHome=1"
    );
    res.render("index", {
      data: products,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router