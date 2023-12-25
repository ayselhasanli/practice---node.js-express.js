const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));

const db = require("./data/db");

app.use("/products/:id", async function (req, res) {
  try {
    const [products] = await db.execute("select * from products");
    const product = products.find((u) => u.id == req.params.id);
    res.render("productDetails", product);
  } catch (err) {
    console.log(err);
  }
});

app.use("/products", async function (req, res) {
  try {
    const [products] = await db.execute("select * from products");
    res.render("products", {
      data: products,
    });
  } catch (err) {
    console.log(err);
  }
});

app.use("/", async function (req, res) {
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

app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
