const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));

const products = [
  {
    id: 1,
    name: "Iphone 15 Pro",
    price: 4799,
    isActive: true,
    currency: "AZN",
    photo: "/img/iphone-15-pro.png",
    rating: 4,
    isHome: false,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ad sit nam molestiae mollitia libero, voluptatibus quae cum ea. Ipsa aliquam a reprehenderit repudiandae, quia accusamus quo molestias Feligendi vel!",
  },
  {
    id: 2,
    name: "Apple Macbook Pro 16",
    price: 8500,
    isActive: false,
    currency: "AZN",
    photo: "/img/macbook-pro-16.png",
    rating: 5,
    isHome: true,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ad sit nam molestiae mollitia libero, voluptatibus quae cum ea. Ipsa aliquam a reprehenderit repudiandae, quia accusamus quo molestias Feligendi vel!",
  },
  {
    id: 3,
    name: "Apple Airpods Max",
    price: 1549,
    isActive: true,
    currency: "AZN",
    photo: "/img/airpods-max.png",
    rating: 3,
    isHome: true,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ad sit nam molestiae mollitia libero, voluptatibus quae cum ea. Ipsa aliquam a reprehenderit repudiandae, quia accusamus quo molestias Feligendi vel!",
  },
  {
    id: 4,
    name: "Apple Airpods 2",
    price: 279,
    isActive: true,
    currency: "AZN",
    photo: "/img/airpods-2.png",
    rating: 5,
    isHome: false,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ad sit nam molestiae mollitia libero, voluptatibus quae cum ea. Ipsa aliquam a reprehenderit repudiandae, quia accusamus quo molestias Feligendi vel!",
  },
];

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
  res.render("index", {
    data: products,
  });
});

app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
