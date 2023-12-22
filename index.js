// var http = require("http") //node modules => http, fs, os
// var fs = require("fs")
// var server = http.createServer((req, res) => {
//     if(req.url == "/"){
//         fs.readFile("index.html", (err, html) => {
//           res.write(html);
//           res.end();
//         });
//     } else if(req.url == "/products"){
//         fs.readFile("products.html", (err, html) => {
//           res.write(html);
//           res.end();
//         });
//     }  else {
//          fs.readFile("404.html", (err, html) => {
//            res.write(html);
//            res.end();
//          });
//     }
// })

// server.listen(3000, () => {
//     console.log("node.js server at port 3000")
// })

const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

const products = [
  {
    id: 1,
    name: "Iphone 15 Pro",
    price: 4799,
    isActive: true,
    currency: "AZN",
    photo: "/img/iphone-15-pro.png",
  },
  {
    id: 2,
    name: "Apple Macbook Pro 16",
    price: 8500,
    isActive: false,
    currency: "AZN",
    photo: "/img/macbook-pro-16.png",
  },
  {
    id: 3,
    name: "Apple Airpods Max",
    price: 1549,
    isActive: true,
    currency: "AZN",
    photo: "/img/airpods-max.png",
  },
  {
    id: 4,
    name: "Apple Airpods 2",
    price: 279,
    isActive: true,
    currency: "AZN",
    photo: "/img/airpods-2.png",
  },
];

//routes

// app.use("/products/:id", function (req, res) {
//     res.send("products details" + " " + req.params.id)
// });

// app.use("/products", function (req, res) {
//   res.send("products");
// });
// app.use("/", function (req, res) {
//   res.send("homepage");
// });

app.use("/products/:id", function (req, res) {
  const productInfo = products.find((u) => u.id == req.params.id);
  res.render("productDetails", productInfo);
});

app.use("/products", function (req, res) {
  res.render("products", {
    data: products,
  });
});
app.use("/", function (req, res) {
  res.render("index");
});

app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
