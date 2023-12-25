const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));
const userRoutes = require("./routes/users")

app.use(userRoutes)


app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
